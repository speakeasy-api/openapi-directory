package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthenticateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=password")
    public String password;
    public AuthenticateQueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
}