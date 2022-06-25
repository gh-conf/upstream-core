# upstream-core

![Build](https://github.com/gh-conf/upstream-core/actions/workflows/nodejs.yml/badge.svg)
[![NPM Version](https://img.shields.io/npm/v/@gh-conf/upstream-core.svg)](https://www.npmjs.com/package/@gh-conf/upstream-core)
[![NPM Downloads](https://img.shields.io/npm/dt/@gh-conf/upstream-core.svg)](https://www.npmjs.com/package/@gh-conf/upstream-core)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/upstream-core.svg)](https://github.com/gh-conf/upstream-core)
[![LICENSE](https://img.shields.io/npm/l/@gh-conf/upstream-core.svg)](https://github.com/gh-conf/upstream-core/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/upstream-core.svg)](https://github.com/gh-conf/upstream-core/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/upstream-core.svg)](https://github.com/gh-conf/upstream-core/commits/master)


Configures upstream for a forked repository at the given directory path

## Install

```
npm install @gh-conf/upstream-core
```

## Usage

```js
const upstream = require('@gh-conf/upstream-core');

await upstream('/home/arshad/upstream-core');

await upstream(process.cwd());
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/upstream-core/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.


## Related

- [upstreamit](https://github.com/gh-conf/upstreamit)
