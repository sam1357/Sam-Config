export ZSH="$HOME/.oh-my-zsh"
export PATH="$HOME/.local/bin:$PATH"
plugins=(git docker zsh-autosuggestions fast-syntax-highlighting)
source $ZSH/oh-my-zsh.sh
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
########################################### PATHS ##########################################
export PNPM_HOME="/home/sam1357/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
export PATH=~/bin:$PATH
export PATH="$PATH:/opt/nvim-linux64/bin"
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
export FPATH="<path_to_eza>/completions/zsh:$FPATH"
######################################## EVALS #############################################
eval "$(starship init zsh)"
eval "$(zoxide init zsh)"
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
########################################### SOURCES ########################################
source /usr/share/doc/fzf/examples/key-bindings.zsh
source /usr/share/doc/fzf/examples/completion.zsh
 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
