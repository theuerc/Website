---
section: user-settings
title: Dotfiles
---

<script context="module">
  export const prerender = true;
</script>

# Dotfiles

Dotfiles are a way to customize your developer environment according to your personal needs.

To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in [your user preferences](https://gitpod.io/preferences).

Gitpod will recognize and run one of the following install scripts from your dotfiles repository.

- install.sh
- install
- bootstrap.sh
- bootstrap
- script/bootstrap
- setup.sh
- setup
- script/setup

Note: Your installation script will be terminated if it exceeds 120 seconds.

Make sure to make your installation script executable with `chmod 755 <install-script-name>.sh` before committing and pushing to your dotfiles repository.

If there is no install script, your dotfiles will be symlinked into `/home/gitpod`.

## Example

> You can refer this [demo-dotfiles template](https://github.com/gitpod-io/demo-dotfiles) to bring your dotfiles to Gitpod.

The example below has just one dotfile called `.bash_aliases`. If this file is present in a workspace home directory, it will be found by the '.bashrc' startup script in the Gitpod default image, so no additional install script is required.

**.bash_aliases**

```sh
echo Hello Gitpod
echo Here is my .bash_aliases dotfile

alias gitsha='git rev-parse HEAD'
```

### Troubleshooting

The dotfiles repository installation logs are saved to `/home/gitpod/.dotfiles.log` and can be viewed via

```bash
cat /home/gitpod/.dotfiles.log
```


## FAQs

### [It it possible to cache the dotfiles installation?](https://discord.com/channels/816244985187008514/1072003259075657849)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

If your dotfiles installation relies on some heavy dependencies, that can take some time to install by nature.

So, everytime you start a workspace, you may have to wait for the dotfiles installation to complete before you can enter the workspace.

For some cases, you can start the commands in background from your `install.sh`, by adding `& disown` at the end of a command:

```bash
sudo apt install qemu-user-static & disown
```

This is a good workaround, so your workspace can start early and the long-running commands from your dotfiles installation script can happen in parallel.

But it may not work if you are installing a SHELL (e.g. `zsh`) or a dependency of something else that has to start before your dotfiles can get installed.

See [https://github.com/gitpod-io/gitpod/issues/7592](#7592) for more info, please upvote and share your feedback on this issue.
