package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddWordsToWordListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public AddWordsToWordListHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}