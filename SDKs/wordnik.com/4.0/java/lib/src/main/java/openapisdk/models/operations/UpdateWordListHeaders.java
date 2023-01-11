package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWordListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public UpdateWordListHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}