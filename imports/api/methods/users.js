import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
    'Accounts.sendResetEmail'(email) {
        const account = Accounts.findUserByEmail(email);
        if (account) {
            Accounts.sendResetPasswordEmail(account._id, email);
        } else {
            console.log("email not registered");
        }
    }
});