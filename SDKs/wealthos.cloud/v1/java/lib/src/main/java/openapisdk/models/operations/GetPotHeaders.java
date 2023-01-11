package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetPotHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}