# last.fm
Rails Api & AngularJS SPA

This application is built for demo purposes which consumes [LastFM Api](http://www.last.fm/api) and provide functionality to search artists and their top tracks, albums etc.

#### Authentication
It uses [devise-token-auth](https://github.com/lynndylanhurley/devise_token_auth) gem on server side and [ng-token-auth](https://github.com/lynndylanhurley/ng-token-auth) on client side for authentication.

#### Other libraries used-

- [Angular formly](https://github.com/formly-js/angular-formly)
- [UI Router](https://github.com/angular-ui/ui-router)

## Running locally

``` git clone https://github.com/vaibhavkhl/last.fm.git ```

then install both the apps -

````ruby
#Installing Client app
$ cd client
$ npm install && bower install 
$ grunt serve
```
````ruby
#Installing Server app
$ cd server
$ bundle install
$ bundle exec rake db:create && bundle exec rake db:migrate
$ rails s
```
