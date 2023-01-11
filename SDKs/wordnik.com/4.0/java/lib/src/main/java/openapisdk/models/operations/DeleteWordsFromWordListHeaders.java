package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWordsFromWordListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=auth_token")
    public String authToken;
    public DeleteWordsFromWordListHeaders withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
}