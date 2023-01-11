package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public UserEmailQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
}