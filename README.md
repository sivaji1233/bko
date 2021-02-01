# BKOServices Website
This repository contains the code for our website (www.bkoservices.com). The webiste is hosted using github pages and
DNS routing is done by GoDaddy. This is a static website i.e. there is no DB and the content is not customized according to the user.\
\
__primary contributor(s)__: @sampathv95\
\
![](https://img.shields.io/badge/build-passed-green!)
![](https://img.shields.io/badge/codestyle-standard-blue)
![](https://img.shields.io/badge/website-running-brightgreen)
![](https://img.shields.io/badge/backend-not%20developed-red)

## Technologies
Following technologies are used to host the website:
* HTML 5
* CSS 3
* JavaScript ES9 2018
* Ruby 2.7
* Liquid (dynamic HTML templating)

## Editing and/or running on your local machine
To make edits to the website and/or to run the website on your local machine, follow the steps below:

1. Checkout the repository to your local directory.
2. Install jekyll (https://jekyllrb.com/)
    ##### Visit the links below according to your OS for jekyll installation
    * macOS : https://jekyllrb.com/docs/installation/macos/
    * Windows: https://jekyllrb.com/docs/installation/windows/
    * Ubuntu: https://jekyllrb.com/docs/installation/ubuntu/
    * Other Linux: https://jekyllrb.com/docs/installation/other-linux/
3. Navigate to the directory in which this repository has been cloned.
4. Install the jekyll and bundler gems
```
$ gem install jekyll bundler
```
5. Open _config.yml file and edit the base baseurl from "/" to "/bkoservices"
6. Start the server and run the website using the following command
```
$ bundle exec jekyll serve
```
7. Changes made in the html/css/js file are reflected in the browser when the file is saved. No need to restart the server.

## Workflow to push local changes
The development workflow for this repository is the standard one used for version control systems.
* Create a new branch from master
* Checkout from this new branch to local directory
* Make necessary changes and verify visually in your local runtime
* Commit and push to the new branch
* Make a pull request to from the new branch to master
* Tag the primary contributor(s) on the pull request and they will verify and merge the request (merging the request yourself isn't recommended unless you are a primary contributor)
