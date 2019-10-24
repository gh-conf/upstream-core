const expect = require('chai').expect;
const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');

const Upstream = require('../index');


const UPSTREAM_CONFIG = '[remote "upstream"]\n\turl = https://github.com/taskcluster/taskcluster\n\tfetch = +refs/heads/*:refs/remotes/upstream/*\n';


describe('validate upstreaminit', () => {
  it('upstream details should be present', async () => {
    const config = await readConf(process.cwd());
    const modifiedConfig = config.replace('https://github.com/gh-conf/upstream-core', 'https://github.com/arshadkazmi42/taskcluster');
    await writeConf(process.cwd(), modifiedConfig);
    await Upstream(process.cwd());
    expect((await readConf(process.cwd())).includes(UPSTREAM_CONFIG)).to.equal(true);

    // Reset Original Config
    await writeConf(process.cwd(), config);
  }).timeout(1000);
  it('upstream throws error not a forked repository', async () => {
    try {
      await Upstream(process.cwd());
    } catch (err) {
      expect((await readConf(process.cwd())).includes(UPSTREAM_CONFIG)).to.equal(false);
      expect(err.message).to.equals('Not a forked repository!!!');
    }
  });
  it('should throw upstream already configured', async () => {
    const config = await readConf(process.cwd());
    const modifiedConfig = config.replace('https://github.com/gh-conf/upstream-core', 'https://github.com/arshadkazmi42/taskcluster');
    await writeConf(process.cwd(), modifiedConfig);
    await Upstream(process.cwd());
    expect((await readConf(process.cwd())).includes(UPSTREAM_CONFIG)).to.equal(true);

    try {
      await Upstream(process.cwd());
    } catch (err) {
      expect((await readConf(process.cwd())).includes(UPSTREAM_CONFIG)).to.equal(true);
      expect(err.message).to.equals('Upstream already configured');
    }

    // Reset Original Config
    await writeConf(process.cwd(), config);
  }).timeout(1000);
  it('should throw error path does not exists', async () => {
    try {
      await Upstream('/arshad/home/arshad');
    } catch (err) {
      expect(err.message).to.equals('/arshad/home/arshad/.git/config not found');
    }
  });
});
