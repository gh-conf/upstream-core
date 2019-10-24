const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');
const { ParentRepo } = require('@gh-conf/gh-api');
const { UserRepo } = require('@gh-conf/gh-conf-parse');

const { Formatter, Validator } = require('./lib');


const upstream = async (currentPath) => {

  try {

    // Read config file content
    const configContent = await readConf(`${currentPath}`);

    // Check if upstream already added
    if (Validator.isUptreamed(configContent)) {
      throw new Error('Upstream already configured');
    }

    // Fetch current repository usernanme and repository name
    const { username, repository } = UserRepo();

    // Getting parent repo url
    const url = await ParentRepo(username, repository);
    if (!url) {
      throw new Error('Not a forked repository!!!');
    }

    // Formatting Parent Repo URL
    const upstreamData = Formatter(url);

    // Writting updated config
    return await writeConf(`${currentPath}`, configContent + upstreamData);

  } catch (err) {
    console.error(err);
    throw err;
  }
};


module.exports = upstream;
