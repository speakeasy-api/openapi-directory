package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateBetslipHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiKey")
    public String apiKey;
    public ValidateBetslipHeaders withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiSecret")
    public String apiSecret;
    public ValidateBetslipHeaders withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}