package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetPotsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}