package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserEmailUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public UserEmailUpdateMultipartFormData withEmail(String email) {
        this.email = email;
        return this;
    }
}