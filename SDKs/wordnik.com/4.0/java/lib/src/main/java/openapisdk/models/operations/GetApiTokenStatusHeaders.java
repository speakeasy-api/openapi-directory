package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiTokenStatusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=api_key")
    public String apiKey;
    public GetApiTokenStatusHeaders withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}