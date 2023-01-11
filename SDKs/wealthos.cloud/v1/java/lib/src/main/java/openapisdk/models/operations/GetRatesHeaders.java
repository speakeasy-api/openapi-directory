package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRatesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetRatesHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}