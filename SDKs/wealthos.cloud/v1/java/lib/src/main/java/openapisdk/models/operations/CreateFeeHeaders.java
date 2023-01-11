package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFeeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateFeeHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}