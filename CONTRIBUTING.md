# Consensus

Since this config is used in code bases that affect various internal and external repos.
It can potentially imply changes on repos with multi-million users so we need to be mindful
about proposed changes. Therefore it's important to seek consensus before making any PRs.

### Here is how to do it

If you work at Schibsted you can discuss it right at `#eslint-config-schibst` Slack channel.

[Open an issue](https://github.com/schibsted/eslint-config-schibsted/issues/new) and motivate the
changes you are proposing. Add anything that justifies your case like code examples, links to
documentation or relevant discussion/blog posts.

### Write great commit messages
You should only change one thing in each commit. The commit message should clearly state 
what changed and (when it exist) include the issue-id where the discussion took place. 

# Make a PR

If there's consensus for implementing your feature, you may go ahead and make a PR.
Travis with automatically run tests on your branch/PR.
Just make sure you refer to the relevant issue numbers in the commits you're making.
Keep the commit messages expressive. Please mention what is being changed in each commit with links
to relevant issues.
Once the PR receives LGTM from the maintainers, it'll be merged and published with appropriate
semvers.

# Publishing

```bash
# Make sure to only make do this in the package that has changed
# Update CHANGELOG
$ npm version <patch | minor | major>
$ git push --tags origin master
$ npm publish
```
