package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWithdrawalHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateWithdrawalHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}