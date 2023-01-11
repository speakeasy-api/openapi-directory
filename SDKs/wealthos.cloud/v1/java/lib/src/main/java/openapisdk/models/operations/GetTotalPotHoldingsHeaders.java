package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTotalPotHoldingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetTotalPotHoldingsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}