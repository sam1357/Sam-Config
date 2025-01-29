#!/bin/bash

set -eo pipefail
set +u

functions=(
  update_dependencies
  install_homebrew
  install_zsh
  install_docker
  install_kubernetes
  install_go
  install_zoxide
  install_eza
  install_starship
  install_build_essential
  install_apt_apps
  install_brew_apps
  install_helm_plugins
  install_and_configure_nvim
  install_gradle
  install_rust
  configure_dotfiles
  create_ssh_key
)

log() {
  echo -e "\033[1;32m[INFO] - \033[1;34m$1\033[0m"
}

error() {
  echo -e "\033[1;31m[ERROR] - \033[1;33m$1\033[0m" >&2
  exit 1
}

separator() {
  echo "----------------------------------------"
}

check_sudo() {
  if ! sudo -v > /dev/null 2>&1; then
    error "Sudo is required to run this script."
  fi
}

detect_os() {
  log "Detecting operating system..."
  if [[ "$(uname -s)" == "Linux" ]]; then
    if [ -f /etc/os-release ]; then
      source /etc/os-release
      if [[ "$ID" == "ubuntu" ]]; then
        OS="ubuntu"
        log "Detected Ubuntu."
      else
        error "Unsupported Linux distribution: $ID"
      fi
    else
      error "Unknown Linux distribution."
    fi
  else
    error "Unsupported OS: $(uname)"
  fi
}

update_dependencies() {
  log "Updating and upgrading dependencies..."
  sudo apt update && sudo apt upgrade -y
  log "Ubuntu update and upgrade completed."
}

install_homebrew() {
  log "Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  log "Homebrew installation completed."
}

install_zsh() {
  log "Installing Zsh..."
  sudo apt install -y zsh
  log "Zsh installation completed."

  if [[ "$SHELL" != "$(which zsh)" ]]; then
    log "Changing default shell to Zsh..."
    chsh -s "$(which zsh)"
    log "Default shell changed to Zsh."
  else
    log "Default shell is already Zsh."
  fi

  log "Installing Zim..."
  curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
  log "Zim installation completed."
}

install_docker() {
  echo "Do you want to install Docker? (y/n) Select 'n' if you are running WSL2."
  read -r install_docker
  if [ "$install_docker" == "y" ]; then
    log "Installing Docker..."
    sudo apt-get update
    sudo apt-get install -y ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    sudo groupadd docker
    sudo usermod -aG docker "$USER"
    log "Docker installation completed."
  else 
    log "Skipping Docker installation."
  fi
}

install_kubernetes() {
  log "Installing Kubernetes..."
  curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
  sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
  log "Kubernetes installation completed."
}

install_go() {
  log "Installing the latest version of Go..."
  GO_VERSION=$(curl -s https://go.dev/VERSION?m=text)
  GO_TAR="$GO_VERSION.linux-amd64.tar.gz"
  GO_URL="https://dl.google.com/go/$GO_TAR"

  log "Downloading Go $GO_VERSION..."
  curl -LO "$GO_URL"

  log "Extracting Go $GO_VERSION..."
  sudo rm -rf /usr/local/go
  sudo tar -C /usr/local -xzf "$GO_TAR"
  rm "$GO_TAR"

  log "Go $GO_VERSION installation completed."
}

install_zoxide() {
  log "Installing Zoxide..."
  curl -sSfL https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh
  log "Zoxide installation completed."
}

install_eza() {
  log "Installing Eza..."
  sudo apt install -y gpg
  sudo mkdir -p /etc/apt/keyrings
  wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
  echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
  sudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list
  sudo apt update
  sudo apt install -y eza
  log "Eza installation completed."
}

install_starship() {
  log "Installing Starship..."
  curl -sS https://starship.rs/install.sh | sh
  log "Starship installation completed."
}

install_build_essential() {
  log "Installing build-essential tools..."
  sudo apt install -y build-essential
  log "Build-essential tools installation completed."
}

install_apt_apps() {
  log "Installing Fzf, Jq, Yq, SSHFS, Unzip and OpenJDK 17..."
  sudo apt install -y fzf jq openjdk-17-jdk unzip
  log "Fzf, Jq, SSHFS, Unzip and OpenJDK 17 installation completed."
}

install_brew_apps() {
  log "Installing Pnpm, Kubectl, and Helm..."
  brew install pnpm kubectx helm 
  log "Pnpm, Kubectl, and Helm installation completed."
}

install_helm_plugins() {
  log "Installing Helm schema and helm diff plugins..."
  helm plugin install https://github.com/databus23/helm-diff
  helm plugin install https://github.com/dadav/helm-schema
  log "Helm plugins installation completed."
}

install_and_configure_nvim() {
  log "Installing Neovim..."
  curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz
  sudo rm -rf /opt/nvim
  sudo tar -C /opt -xzf nvim-linux64.tar.gz
  log "Setting Neovim as default editor..."
  git config --global core.editor "nvim"
  sudo update-alternatives --install /usr/bin/editor editor /usr/local/bin/nvim-linux64/bin/nvim 100
  sudo update-alternatives --set editor /usr/local/bin/nvim-linux64/bin/nvim
  log "Neovim installation completed."
}

install_gradle() {
  log "Installing Gradle..."
  wget https://downloads.gradle.org/distributions/gradle-8.8-bin.zip -O /tmp/gradle.zip
  sudo mkdir -p /opt/gradle
  sudo unzip -d /opt/gradle /tmp/gradle.zip
  rm /tmp/gradle.zip
  log "Gradle installation completed."
}

install_rust() {
  log "Installing Rust..."
  curl https://sh.rustup.rs -sSf | sh
  log "Rust installation completed."
}

configure_dotfiles() {
  log "Cloning dotfiles..."
  git clone https://github.com/sam1357/Sam-Config ~/tmp/Sam-Config
  mv ~/tmp/Sam-Config/.zshrc ~/.zshrc
  mv ~/tmp/Sam-Config/.zsh-aliases ~/.zsh-aliases
  mv ~/tmp/Sam-Config/.zimrc ~/.zimrc
  mv ~/tmp/Sam-Config/starship.toml ~/.config/starship.toml
  mv ~/tmp/Sam-Config/nvim ~/.config/nvim
  rm -rf ~/tmp/Sam-Config
  log "Dotfiles cloned and moved."
}

create_ssh_key() {
  log "Creating SSH key..."
  ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519 -N ""
  sudo apt install -y xsel
  cat ~/.ssh/id_ed25519.pub | xsel -b
  log "SSH key created and copied to clipboard."
}

run_functions() {
  if [ $# -eq 0 ]; then
    log "No function specified, running all functions."
  else
    log "Running the following functions: $@"
    functions=("$@")
  fi

  for func in "${functions[@]}"; do
    if declare -f "$func" > /dev/null; then
      separator
      $func
    else
      error "Function $func not found!"
    fi
  done
}

help() {
  echo "Usage: $0 [function1] [function2] ..."
  echo "No arguments will run all functions."
  echo "Available functions:"
  for func in "${functions[@]}"; do
    echo "  $func"
  done
}

main() {
  if [ "${1:-}" == "-h" ] || [ "${1:-}" == "--help" ]; then
    help
    exit
  fi

  check_sudo
  detect_os
  run_functions "$@"
  log "Bootstrap completed. Restarting shell..."
  exec zsh
}

main "$@"
