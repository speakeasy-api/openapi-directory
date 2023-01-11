package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePotHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public UpdatePotHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}