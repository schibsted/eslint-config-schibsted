# Consensus

This config is used in code bases that affect various internal and external repos.
It can potentially imply changes on repos with multi-million users. So we need to be mindful
about proposed changes because the repo maintainers may have to override them or unnecessarily
touch critical code that can affect their users.

Therefore it's important to seek consensus before making any PRs.
If you are a maintainer of a code base that depends on this config, it's good to "WATCH" this repo
to be notified of the latest proposals/changes.

We use semver so breaking changes will not affect your code unless you `upgrade`.

### Here is how to do it

If you work at Schibsted you can discuss right at `#eslint-config-schibst` Slack channel.

[Open an issue](https://github.com/schibsted/eslint-config-schibsted/issues/new) and motivate the
changes you are proposing. Add anything that justifies your case like code examples, links to
documentation or relevant discussion/blog posts.

### Write expressive commit messages

If the issue got positive feedback, you may go ahead and make a PR. Consider:

* Please only change one thing in each commit.
* The commit message should clearly state what changed (when it exist).
* The commit message should include the issue-id where the discussion took place.
* Travis with automatically run tests on your PR branch.
* Once the PR receives LGTM from the maintainers, it'll be merged and published with appropriate
semvers.

# Publishing

```bash
# Make sure to only make do this in the package that has changed
# Update CHANGELOG
$ npm version <patch | minor | major>
$ git push --tags origin master
$ npm publish
```
