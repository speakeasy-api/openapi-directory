package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRebalanceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CreateRebalanceHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}