package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvestorHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetInvestorHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}