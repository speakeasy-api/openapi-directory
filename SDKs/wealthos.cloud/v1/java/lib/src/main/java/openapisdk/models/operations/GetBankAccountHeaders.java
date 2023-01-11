package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBankAccountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetBankAccountHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}