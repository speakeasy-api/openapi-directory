package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetinvestorAccountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetinvestorAccountHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}