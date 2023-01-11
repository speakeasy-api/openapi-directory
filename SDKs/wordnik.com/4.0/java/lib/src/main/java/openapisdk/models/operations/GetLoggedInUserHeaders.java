package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoggedInUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public GetLoggedInUserHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}