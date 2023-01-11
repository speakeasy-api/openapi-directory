package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBankAccountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateBankAccountHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}