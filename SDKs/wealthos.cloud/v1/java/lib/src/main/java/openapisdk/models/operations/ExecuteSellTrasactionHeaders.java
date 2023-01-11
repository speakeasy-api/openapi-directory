package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteSellTrasactionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public ExecuteSellTrasactionHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}