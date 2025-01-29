# Config and Dotfiles

This repository contains my personal configuration files and dotfiles.

It also contains a basic bootstrap script to install the configuration files on a new machine.

Currently this only supports Ubuntu.

## Running the bootstrap script

```
curl -fssL https://raw.githubusercontent.com/sam1357/Sam-Config/refs/heads/main/bootstrap.sh | bash
```

## Manual installation notes

- [`starship.rs`](https://starship.rs/guide/#%F0%9F%9A%80-installation)
- [`zsh`](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)
- [`zimfw`](https://zimfw.sh/docs/install/)
- [`homebrew`](https://brew.sh/)
- [`zimfw`](https://zimfw.sh/docs/install/)
- [`neovim`](https://github.com/neovim/neovim/blob/master/INSTALL.md)
- [`eza`](https://eza.rocks/)

- [`zoxide`](https://github.com/ajeetdsouza/zoxide?tab=readme-ov-file#installation)
- [`docker`](https://docs.docker.com/engine/install/)
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [`go`](https://golang.org/doc/install)
- [`gradle`](https://gradle.org/install/)
- [`rust`](https://www.rust-lang.org/tools/install)
- [`fnm`](https://github.com/Schniz/fnm?tab=readme-ov-file#installation)
- [`pyenv`](https://github.com/pyenv/pyenv?tab=readme-ov-file#installation)

### Apt packages

```
sudo apt install -y fzf jq openjdk-17-jdk unzip
```

### Brew packages

```
brew install pnpm kubectx helm
```

### Helm plugins

```
helm plugin install https://github.com/databus23/helm-diff
helm plugin install https://github.com/dadav/helm-schema
```
