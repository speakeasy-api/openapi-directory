package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPaymentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllPaymentsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}