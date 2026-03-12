# Bug Sim

BugSim provides a web-based visualalization of bugs as a test harness for detectors, and for fun.

[Try it yourself](https://thrasher.github.io/bugsim/index.html?fly=11&moth=3&bee=7&spider=5&time=true&background=pebble.jpg). Change the query parameters on the page to configure what is displayed.

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

## Add Insects

Additional insects can be created by adding a new sprite image and creating new JavaScript objects to manage it.

The following prompt was used to create a sprite image of a bee using Nano Banana. The image does need to be edited in post-processing by hand to remove the white background, and precicely position the insect images on a grid, but the AI image offers a good starting point.

````
Create a sprite image of a Apis mellifera bee as a png. The image should consist of two rows of square subsections showing the bee's incremental motion. Each subsection of the image, in both rows, should be 100 pixels high and 100 pixels wide, so that the overall png image dimensions are 400 pixels wide and 200 pixels tall. The bee should be rendered as if viewed from above with neutral lighting. The first row should show the bee crawling over 4 frames with it's legs in different positions, and it's wings moving appropriately relative to it's legs. The images should progress from left to right for each incremental change in the bee's posture. The second row should show the same bee flying, with it's wings flapping over 4 frames. The images should show changes to the bee's wing position as if flapping in flight, progressing from left to right as it flaps. For both rows, the entire motion should be incremental from left to right, such that if played in a repeating loop from left to right, the right most image would naturally progress to the left most images. Both rows of bee movement should show the bee with it's head at the top of the image, and it's body at the bottom, as viewed from above the bee, looking down with neutral lighting. The background of the image should be white, including the area beneath the bee itself.
````

## License

This software uses the MIT license found in [LICENSE](LICENSE).
