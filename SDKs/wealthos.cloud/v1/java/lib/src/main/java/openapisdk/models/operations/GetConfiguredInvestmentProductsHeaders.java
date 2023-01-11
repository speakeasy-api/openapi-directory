package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfiguredInvestmentProductsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetConfiguredInvestmentProductsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}