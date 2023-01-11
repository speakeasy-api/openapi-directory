package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvestmentProductPriceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetInvestmentProductPriceHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}