# Bug Sim

BugSim provides a web-based visualalization of bugs as a test harness for detectors, and for fun.

## Development Guide

Follow these steps to get started and set up your development environment.

### MS Visual Code

Make sure MS Visual Code is installed and updated.

### Install Homebrew (macOS)

See [Homebrew](https://brew.sh/)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Node.js

```bash
brew install npm
```

### Clone this repo
```bash
# create a dev directory
mkdir ~/Documents/dev

# change into the directory
cd ~/Documents/dev

# clone the repo
git clone https://github.com/thrasher/bugsim.git
```

## Run Vite

```bash
# change directories into the codebase you just cloned
⁠⁠cd bugsim

# Open MS Visual Code from the shell
⁠⁠code .

# download and install all Node packages used by this codebase
npm install

# this command stars the Vite environment
⁠⁠npm run dev
```

## Get Coding!

Changes to the code should be reflected in the website. From the Terminal, view the website by pressing 'o'.

Quit Vite by pressing 'q'.

## Requested SPAIA features

1. Remove "Hello Vite! and other text.

1. Add date/timestamp to upper left corner of screen, that updates with each second, as an overlay on the image.

1. add static (still photo) background image that fills the entire background

1. add video background image, that plays a video clip in a loop

1. add URL parameter that chooses the background image

1. Add sprite for bee

1. Add sprite for housefly

1. Add three sizes of bee (small, medium, large)

1. add URL parameters that tell which insects to include

1. add URL parameters that tell how many insects to include

