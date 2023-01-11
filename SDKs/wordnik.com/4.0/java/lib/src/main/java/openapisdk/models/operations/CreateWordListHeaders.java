package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWordListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public CreateWordListHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}