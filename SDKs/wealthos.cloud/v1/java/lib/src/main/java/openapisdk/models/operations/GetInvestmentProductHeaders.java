package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvestmentProductHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetInvestmentProductHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}