package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWordListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public DeleteWordListHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}