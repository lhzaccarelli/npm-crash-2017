# Sematic Versioning

Library A.B.C

## A - Major version
Major changes
Breaks the API

## B - Minor version
New features
Doesn't break the API

## C - Patch
Bug fixes


# Version symbols

## ^
Only updates minor version and bug fixes. Never updates the major version.
Ex: ^4.17.4 -> Never updates to 5.x.x

## ~
Only updates bug fixes. Never updates major or minor versions.
Ex: ~4.17.4 -> Never updates to 5.x.x or 5.18.x

## Exact version x.x.x
Never updates the module.
Ex: 4.17.4 -> Will never update.

## *
Always update everything, including the major version.