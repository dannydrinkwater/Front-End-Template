# Front End Responsive Template

A Grunt, Bower and LESS fueled responsive Front-End template.

## Getting Started

Create a new directory

Open a terminal window, navigate to the new directory and run:

`git clone https://github.com/dannydrinkwater/Front-End-Template.git .`

Install Grunt modules:

`npm install`

Install Front End dependencies via Bower:

`bower install`

Finally, build the solution:

`grunt`

This will create a new project with any required Grunt dependencies, followed by any Front End dependencies (plugins etc) and then run an initial build of the projects assets.

To have Grunt watch files for changes during development, run:

`grunt watch`

## Public

Ensure that your server webroot points to this directory.

A sample `robots.txt` file is also included for convenience.

A sample `crossdomain.xml` file is also included for convenience.

## Metafiles

### .bowerrc

Ensures that your bower dependencies are placed in the `vendor` directory.

### .gitattributes

Normalise line endings within the Git repository.

### .gitignore

Project specific files and folders to be ignored. The contents of this file is quite minimal because **the majority of standard ignores should be set within a global .gitignore file.**

If there isn't a global .gitignore file setup, here are some example additional entries for this file:

	# OS Files
	.DS_Store
	.DS_Store?
	Thumbs.db

### Gruntfile.js

Responsible for building the site assets ready for deployment.

### bower.json

Defines the default Bower dependencies.

### package.json

Defines the dependecies required by Grunt for the tasks outlined above.

## Recommended further plugins

### Picturefill

For adding responsive image support.
https://github.com/scottjehl/picturefill

### Unveil

For adding lazy loaded images.
https://github.com/luis-almeida/unveil

### Responsive tables

A responsive table solution from Zurb.
http://zurb.com/playground/responsive-tables

### Owl Carousel

A fully featured carousel/slider solution.
https://github.com/OwlCarousel2/OwlCarousel2
