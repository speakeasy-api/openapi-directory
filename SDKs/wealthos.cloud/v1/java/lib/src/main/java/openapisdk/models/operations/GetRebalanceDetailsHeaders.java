package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebalanceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetRebalanceDetailsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}