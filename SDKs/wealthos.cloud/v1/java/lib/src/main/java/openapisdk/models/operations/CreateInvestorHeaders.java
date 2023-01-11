package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvestorHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateInvestorHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}