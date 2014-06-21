# Assemble Template

A boilerplate to generate static HTML pages. Livereload served using `grunt-connect` and `grunt-contrib-watch`.

Managing a library of Static HTML pages can be daunting, especially when it comes to amends.  [Assemble.io](assemble) focuses on _"separation of concerns regarding structure, style, content and data"._

> What projects can I use `assemble-template` for?

* Building and maintaining lightweight, CMS-less websites
* Wireframes and scaffolding
* [HTML Emails](email-git)

## Installation

Clone the repository by running the following command.

```
git clone https://github.com/thetanman/assemble-template.git
```

Change to the project directory to the git repo and install node modules.

```
cd assemble-template && npm install
```

## Project Structure

This template uses example [button-040](assemble-buttons) to generate 2 pages, `./dist/001/index.html` and `./dist/002/index.html`.

```
001/
  | index.hbs
  | partial.hbs
  | partial.json
002/
  | index.hbs
  | partial.hbs
  | partial.json
assets/
  img/
templates/
  | includes/
    | header.hbs
    | footer.hbs
  | layouts/
    | default.hbs  
Gruntfile.js
node_modules/
package.json
README.md
```

## Versions

#### Version 2.0: Polar Bear

* Added `grunt-contrib-connect` to serve HTML files
* Mimic project structure from [assemble buttons](assemble-buttons)
* Removed `browser-sync` support, switched to `grunt-contrib-watch` for livereload options

#### Version 1.1: Bear

Added `grunt-contrib-watch` to update changes to handlebars files, livereload served with `browser-sync`.

#### Roadmap:

* Watch for added files to project using `grunt-contrib-watch`
* Add documentation section with markdown capability

[assemble-buttons)]: https://github.com/assemble/buttons
[assemble)]: https://github.com/assemble/buttons
[email-git]: https://github.com/thetanman
