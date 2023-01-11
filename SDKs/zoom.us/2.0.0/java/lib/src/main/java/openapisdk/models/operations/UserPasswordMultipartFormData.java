package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPasswordMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public UserPasswordMultipartFormData withPassword(String password) {
        this.password = password;
        return this;
    }
}