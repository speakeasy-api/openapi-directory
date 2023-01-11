package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBankAccountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public UpdateBankAccountHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}