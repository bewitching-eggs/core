# Versioning

We use [Changesets](https://github.com/changesets/changesets) tool for packages versioning and publishing.

If a PR affects the functionality of one of the packages, it must include a **changeset**.

## Changeset files

A changeset is an .md file, which is located inside the **.changeset** directory and contains a description of the changes made. For example:

```md
---
"@bewitching-eggs/configs": minor
---

Add new config for eslint

```

## Generate changeset

A changeset file can be generated in two ways:

### Via CLI command

You can use `yarn changes:add` cli command.

After entering the command, you will be prompted to select the package in which the change was made, the release type (major, minor, patch) and enter a description of the change.

### Via pull request bot

[changeset bot](https://github.com/changesets/bot)

In this case, the pull request page will display a message with a 'No Changeset' banner on it
and below a link to create a changeset - "Click here if you're a maintainer who wants to add a changeset to this PR."

Clicking on it generates and opens an md file for editing. In it you need to enter a clear description of the changes made,
as well as add or remove package names (only if the bot has incorrectly identified them).
