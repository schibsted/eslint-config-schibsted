## Consensus

Since this config is used in code bases that affect various internal and external repos.
It can potentially imply changes on repos with multi-million users so we need to be mindful
about proposed changes. Therefore it's important to seek consensus before making any PRs.

### Here is how to do it

If you work at Schibsted you can discuss it right at `#eslint-config-schibst` Slack channel.

[Open an issue](https://github.com/schibsted/eslint-config-schibsted/issues/new) and motivate the
changes you are proposing. Add anything that justifies your case like code examples, links to
documentation or relevant discussion/blog posts.

## Publishing

```bash
# Make sure to only make do this in the package that has changed
# Update CHANGELOG
$ npm version <patch | minor | major>
$ git push --tags origin master
$ npm publish
```
