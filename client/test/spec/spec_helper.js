beforeEach(module('clientApp', function($provide) {
  $provide.value('current_user', {
    id: '1', email: "vaibhav.khl@gmail.com"
  });
}));