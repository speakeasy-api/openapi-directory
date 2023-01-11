package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteBuyTrasactionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public ExecuteBuyTrasactionHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}