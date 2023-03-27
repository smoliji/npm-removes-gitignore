## Npm removes gitignore

Running `npm exec --yes -- github:smoliji/npm-removes-gitignore` removes .gitignore file.

If you list installed directory, you can see .gitignore is missing:
```
➜  npm-removes-gitignore git:(main) tree /home/smoliji/.npm/_npx/8a4444a8203a8303/node_modules/npm-removes-gitignore
/home/smoliji/.npm/_npx/8a4444a8203a8303/node_modules/npm-removes-gitignore
├── bin.js
├── files_i_need
│   └── somejs.js
├── package.json
└── README.md

1 directory, 4 files

```

If you list current directory, you can see .gitignore here:
```
➜  npm-removes-gitignore git:(main) tree -a -I '.git'
.
├── bin.js
├── files_i_need
│   ├── .gitignore
│   └── somejs.js
├── package.json
└── README.md

1 directory, 5 files
```

System
```
➜ node -v
v18.12.1
➜ npm -v
8.19.4
➜  uname -a
Linux lenovo 5.19.0-35-generic #36~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb 17 15:17:25 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
```