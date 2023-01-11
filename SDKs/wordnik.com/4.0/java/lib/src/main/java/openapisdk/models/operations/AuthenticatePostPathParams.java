package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthenticatePostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public AuthenticatePostPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}