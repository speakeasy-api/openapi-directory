package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotTransactionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetPotTransactionsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}