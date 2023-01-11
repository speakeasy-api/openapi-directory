package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPortfolioTemplatesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllPortfolioTemplatesHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}