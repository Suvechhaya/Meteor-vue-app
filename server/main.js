import '../imports/api/fixtures'
import '../imports/api/methods'
import '../imports/api/publications'
import './settings.json'

Meteor.startup(() => {
    smtp = {
        // username: 'postmaster%40sandboxac38376d876a42e4a9fa502a8cfc63ab.mailgun.org',
        // password: '2a0ed3b59abc12304bbf3b17731c8ef7-6ae2ecad-5eac6f10',
        // server: 'smtp.mailgun.org',
        // port: '587'
        username: Meteor.settings.username,
        password: Meteor.settings.password,
        server: Meteor.settings.server,
        port: Meteor.settings.port
    };
    process.env.MAIL_URL =
        'smtp://' + encodeURIComponent(smtp.username) +
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

