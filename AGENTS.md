# Repository Standards

## Scope
These instructions apply to the entire repository.

## Release Policy
- Azure Marketplace publishing is controlled by this repository.
- Normal git tags must not publish to Marketplace.
- Marketplace publish tags must use `release/vX.Y.Z`.
- Manual Marketplace publish is allowed only when an explicit semantic version is provided.
- Do not use `--rev-version` for Marketplace releases.

## Versioning
- `release/vX.Y.Z` is the source of truth for Marketplace release versions.
- `vss-extension.json` must keep a valid base version in git. For this fork, start from `1.0.0`.
- The publish workflow may rewrite `vss-extension.json` during CI to match the release tag or manual version input.
- `package.json` version does not control Azure Marketplace versioning.

## Manifest Rules
- Keep `publisher` set to `flintslabs`.
- Do not change the extension `id` unless there is an explicit product decision to create a different Marketplace listing.
- Keep Marketplace links pointing to the FlintsLabs repository or issue tracker.

## Publishing Workflow
- GitHub Actions workflow `.github/workflows/publish-extension.yml` is the only supported Marketplace publish path.
- Automatic publish trigger: push a tag matching `release/vX.Y.Z`.
- Manual publish trigger: run the workflow and provide a semantic version input.
- Before publishing, ensure `npm run build` passes locally or in CI.

## Local Commands
- Install dependencies: `npm ci`
- Build extension: `npm run build`
- Create release tag: `git tag -a release/v1.0.0 -m "Release 1.0.0"`
- Push release tag: `git push origin release/v1.0.0`

## Guardrails
- Do not configure ordinary `v*` tags to publish.
- Do not bypass the workflow by publishing manually from a local machine unless explicitly required.
- Do not change release versioning rules without updating this file and the publish workflow together.
