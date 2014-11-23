var Initializer = {
  name: "kinvey",
  after: 'store',
  initialize: function(container, application) {
    Kinvey.init(container, application, {
      appKey: "kid_-JHdq4Syw",
      appSecret: "e1fb55bc12124d618adb5c838566fdb1",
      userType: 'user'
    });
    application.inject('controller', 'activeUser', 'user:active');
    return application.inject('router', 'activeUser', 'user:active');
  }
};

export default Initializer;
