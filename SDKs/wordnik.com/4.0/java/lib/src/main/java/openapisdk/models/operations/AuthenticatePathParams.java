package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthenticatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public AuthenticatePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}