package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllinvestorAccountsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllinvestorAccountsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}