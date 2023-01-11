package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountCreateMultipartFormData
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
public class AccountCreateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=account_name")
    public String accountName;
    public AccountCreateMultipartFormData withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public AccountCreateMultipartFormData withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public AccountCreateMultipartFormData withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public AccountCreateMultipartFormData withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=options,json")
    public AccountCreateMultipartFormDataOptions options;
    public AccountCreateMultipartFormData withOptions(AccountCreateMultipartFormDataOptions options) {
        this.options = options;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public AccountCreateMultipartFormData withPassword(String password) {
        this.password = password;
        return this;
    }
}