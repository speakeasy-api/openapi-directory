package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListWordsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public GetWordListWordsHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}