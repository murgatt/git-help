---
id: revert-file-or-directory
title: Revert a single file or a directory
tags:
  - 'revert'
  - 'rollback'
  - 'discard'
  - 'checkout --'
---

# Revert a single file or a directory

## Revert to the last version

```shell
git checkout -- <path/to/file/or/directory>
```

## Revert to a branch

```shell
git checkout <remote>/<branch> -- <path/to/file/or/directory>
```

or

```shell
git checkout <branch> -- <path/to/file/or/directory>
```

## Revert to a specific commit

```shell
git checkout <commit_hash> -- <path/to/file/or/directory>
```
