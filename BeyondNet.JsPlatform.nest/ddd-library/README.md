# BeyondNet.TsLib.Ddd

A simple template to create npm package for DDD common patterns

# Steps to create a new common library with NPM

1. npm init -y
2. tsc --init
3. npm i typescript del-cli --save-dev

# Some important Git commands

- git status
- git add .
- git commit -m <description>
- npm version patch
- npm run build
- npm publish --access=public

Sometimes we need to use:

- npm login
- pm publish --access public ?? npm login

# Key dependencies

- del-cli: clearing the build directory before build.
