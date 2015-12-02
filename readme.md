# Front End Responsive Template


## Getting Started

Create a new directory

Open a terminal window, navigate to the new directory and run:

`git clone https://github.com/dannydrinkwater/Project-Template.git .`

Install Grunt modules:

`npm install`

Install Front End dependencies via Bower:

`bower install`

Finally, build the solution:

`grunt`

This will create a new project with any required Grunt dependencies, followed by any Front End dependencies (plugins etc) and then run an initial build of the projects assets.

To have Grunt watch files for changes when developing, run:

`grunt watch`

## Public

Ensure that your Apache/nginx webroot points to this directory.

A sample `robots.txt` file is also included for convenience.

## Metafiles

### .bowerrc

Ensures that your bower dependencies are organised nicely in the `vendor` directory, along with any Composer dependencies.

### .gitattributes

Settings to normalise line endings within the Git repository.

### .gitignore

Project specific files and folders to be ignored. The contents of this file is quite minimal because **the majority of standard ignores should be set within a global .gitignore file.**

If there isn't a global .gitignore file setup, here are some example additional entries for this file:

	# OS Files
	.DS_Store
	.DS_Store?
	Thumbs.db

	# Web
	/.idea
	composer.lock
	composer.phar

### Gruntfile.js

Responsible for building the site assets ready for deployment.

### bower.json

Defines the default Bower dependencies.

### package.json

Defines the dependecies required by Grunt for the tasks outlined above.