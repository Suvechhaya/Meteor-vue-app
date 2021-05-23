import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
    'Accounts.sendVerificationEmail'() {
        console.log(Meteor.user())
        const user = Meteor.user();
        Accounts.sendVerificationEmail(Meteor.userId(), user.emails[0].address);
    },
    'Accounts.sendResetEmail'(email) {
        console.log('hi')
        const account = Accounts.findUserByEmail(email);
        console.log(account);
        if (account) {
            Accounts.sendResetPasswordEmail(account._id, email);
        } else {
            console.log("email not registered");
        }
    }
});