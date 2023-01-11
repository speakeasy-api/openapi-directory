package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EvaluateRebalanceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public EvaluateRebalanceHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}