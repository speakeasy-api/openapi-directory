package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfiguredInvestmentProductPricesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetConfiguredInvestmentProductPricesHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}