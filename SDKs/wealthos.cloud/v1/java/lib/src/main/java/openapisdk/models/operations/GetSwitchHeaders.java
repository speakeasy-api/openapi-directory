package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSwitchHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetSwitchHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}