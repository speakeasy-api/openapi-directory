package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListsForLoggedInUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public GetWordListsForLoggedInUserHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}