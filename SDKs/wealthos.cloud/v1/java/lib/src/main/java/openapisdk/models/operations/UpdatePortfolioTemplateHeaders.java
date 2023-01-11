package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioTemplateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public UpdatePortfolioTemplateHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}