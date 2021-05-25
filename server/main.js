import '../imports/api/fixtures'
import '../imports/api/methods'
import '../imports/api/publications'

Meteor.startup(() => {
    smtp = {
        username: Meteor.settings.username,
        password: Meteor.settings.password,
        server: 'smtp.gmail.com',
        port: 465,
    };
    process.env.MAIL_URL =
        'smtps://' +
        encodeURI(smtp.username) +
        ':' +
        encodeURIComponent(smtp.password) +
        '@' +
        encodeURIComponent(smtp.server) +
        ':' +
        smtp.port;
});

Accounts.onCreateUser(function (options, user) {
    Meteor.setTimeout(function () {
        Accounts.sendVerificationEmail(user._id);
    }, 1000);

    return user;
});

Accounts.urls.resetPassword = function (token) {
    return Meteor.absoluteUrl('resetPassword/' + token);
}
