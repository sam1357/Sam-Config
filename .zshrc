############################################# ZIM ###########################################
ZIM_HOME=~/.zim
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

# Download zimfw plugin manager if missing.
if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
  curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
      https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
fi

# Install missing modules and update ${ZIM_HOME}/init.zsh if missing or outdated.
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZIM_CONFIG_FILE:-${ZDOTDIR:-${HOME}}/.zimrc} ]]; then
  source ${ZIM_HOME}/zimfw.zsh init -q
fi

source ${ZIM_HOME}/modules/evalcache/evalcache.plugin.zsh
source ${ZIM_HOME}/modules/zsh-defer/zsh-defer.plugin.zsh

# Initialize modules.
zsh-defer source ${ZIM_HOME}/init.zsh
########################################### ALIASES #########################################
source ~/.zsh-aliases
############################################## CSE ##########################################
_SSHFS_ZID=z5418112
_SSHFS_CSE_MOUNT="$HOME"
function cse() {
    # determine where we are relative to the mountpoint (thanks @ralismark)
    local rel=${PWD##${_SSHFS_CSE_MOUNT}}
    if [ -z "$1" ]; then
        # if we don't have arguments, we give the user a shell on the remote cse machine.
        if [ "$PWD" = "$rel" ]; then
            # in the case that we're not in our mountpoint, provide a shell in their home directory.
            ssh "${_SSHFS_ZID}@login${_SSHFS_ZID: -1}.cse.unsw.edu.au"
        else
            # if within the mountpoint, cd to the equivalent dir on the remote before providing a shell (thanks @ralismark)
            ssh "${_SSHFS_ZID}@login${_SSHFS_ZID: -1}.cse.unsw.edu.au" -t "cd $(printf "%q" "./$rel"); exec \$SHELL -l"
        fi
    else
        # if we have arguments, we have a command to execute.
        if [ "$PWD" = "$rel" ]; then
            # in the case that we're not in our mountpoint, we'll execute in the home directory.
            ssh -qt "${_SSHFS_ZID}@login${_SSHFS_ZID: -1}.cse.unsw.edu.au" "$@"
        else
            # if within the mountpoint, cd to the equivalent dir on the remote before executing (thanks @ralismark)
            ssh "${_SSHFS_ZID}@login${_SSHFS_ZID: -1}.cse.unsw.edu.au" -qt "cd $(printf "%q" "./$rel") && $(printf "%q " "$@")"
        fi
    fi
}
########################################### PATHS/EXPORTS ##################################
export PNPM_HOME="/home/sam1357/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH="$HOME/.local/bin:$PATH"
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
export PATH=~/bin:$PATH
export PATH="$PATH:/opt/nvim-linux64/bin"
export PATH="$PATH:/opt/gradle/gradle-8.8/bin"
export FPATH="<path_to_eza>/completions/zsh:$FPATH"
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"

. "$HOME/.cargo/env"

FNM_PATH="/home/sam1357/.local/share/fnm"
if [ -d "$FNM_PATH" ]; then
  export PATH="/home/sam1357/.local/share/fnm:$PATH"
  zsh-defer _evalcache fnm env
fi
######################################## EVALS #############################################
_evalcache starship init zsh
zsh-defer _evalcache zoxide init zsh
zsh-defer _evalcache pyenv init - zsh
zsh-defer _evalcache /home/linuxbrew/.linuxbrew/bin/brew shellenv
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
zsh-defer _evalcache kubectl completion zsh
