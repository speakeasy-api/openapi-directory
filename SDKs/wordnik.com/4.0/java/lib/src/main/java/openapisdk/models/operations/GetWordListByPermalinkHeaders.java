package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListByPermalinkHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public GetWordListByPermalinkHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}