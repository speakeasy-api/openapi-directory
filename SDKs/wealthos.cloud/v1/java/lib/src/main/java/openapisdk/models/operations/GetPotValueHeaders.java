package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotValueHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetPotValueHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}