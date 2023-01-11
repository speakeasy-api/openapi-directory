package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinglePaymentIntentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateSinglePaymentIntentHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}