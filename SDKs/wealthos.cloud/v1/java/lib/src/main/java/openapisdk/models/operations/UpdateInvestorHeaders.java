package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInvestorHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public UpdateInvestorHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}