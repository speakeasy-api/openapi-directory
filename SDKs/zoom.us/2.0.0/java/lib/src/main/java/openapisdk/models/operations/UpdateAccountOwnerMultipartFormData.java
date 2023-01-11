package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountOwnerMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public UpdateAccountOwnerMultipartFormData withEmail(String email) {
        this.email = email;
        return this;
    }
}