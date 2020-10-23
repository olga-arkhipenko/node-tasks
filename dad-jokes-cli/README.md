# Dad Jokes CLI

## Install

```bash
npm install -g .         # Installs the package globally
npm uninstall -g .       # Uninstalls the package
```

or

```bash
npm install && npm link  # Adds a global symlink to CLI script
npm unlink               # Delete the symlink
```

## Use

```bash
dad-jokes-cli --searchTerm <term>  # Find a random joke by a search term
dad-jokes-cli --leaderboard    # Show the most popular joke among the found ones
```
