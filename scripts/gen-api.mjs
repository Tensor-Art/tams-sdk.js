import { $ } from 'execa'
import path from 'path'
import fs from 'node:fs'
import { generateApi } from 'swagger-typescript-api'

const repositories = [
  {
    name: 'tams',
    apiName: 'tams',
    path: 'tams/runtime/swagger/tams_api/tams_api.swagger.json',
    branch: 'master',
  },
]

const repoCommitHashmapFileDir = path.resolve(process.cwd(), './__generated__')

const repoCommitHashmapFilePath = path.join(
  repoCommitHashmapFileDir,
  'repo-commit-hashmap.json'
)

// read the repo-commit-hashmap.json file and assign it to the repos variable
let repos = {}
try {
  repos = JSON.parse(fs.readFileSync(repoCommitHashmapFilePath))
} catch (e) {
  fs.mkdirSync(repoCommitHashmapFileDir, { recursive: true })
}

for (const repo of repositories) {
  // check the current commit hash
  const { stdout } =
    await $`git ls-remote git@g.echo.tech:tensor/${repo.name}.git refs/heads/${repo.branch}`
  const commitHash = stdout.toString().split('\t')[0]

  if (!commitHash) {
    console.error(
      `ERROR: the repo ${repo.name} or the branch ${repo.branch} is not exit`
    )
    continue
  }

  const hashKey = `${repo.name}-${repo.branch}`

  // read previous commit hash from the repos object
  const previousCommitHash = repos[hashKey]

  // update file if hash is different
  if (previousCommitHash !== commitHash) {
    await $`rm -rf ./__temp__/${repo.name}`
    console.log(`download ${repo.name} ${repo.branch} branch...`)
    await $`git clone git@g.echo.tech:tensor/${repo.name}.git --depth 1 --branch ${repo.branch} --single-branch --quiet ./__temp__/${repo.name}`
    console.log(`${repo.name} downloaded`)

    // update previous commit hash in the repos object
    repos[hashKey] = commitHash

    // generate the API
    await generateApi({
      name: `${repo.apiName}.ts`,
      input: path.resolve(process.cwd(), `./__temp__/${repo.path}`),
      output: path.resolve(process.cwd(), './__generated__/apis'),
      templates: path.resolve(process.cwd(), './scripts/templates'),
      httpClientType: 'fetch',
    })

    // write the repos object to the repo-commit-hashmap.json file
    fs.writeFileSync(repoCommitHashmapFilePath, JSON.stringify(repos, null, 2))
  } else {
    console.log(`no update required for ${repo.name}`)
  }
}
