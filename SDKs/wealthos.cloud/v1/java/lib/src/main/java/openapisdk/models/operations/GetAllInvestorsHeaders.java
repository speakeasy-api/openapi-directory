package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllInvestorsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllInvestorsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}