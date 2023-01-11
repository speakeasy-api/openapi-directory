package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaceSingleBetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiKey")
    public String apiKey;
    public PlaceSingleBetHeaders withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiSecret")
    public String apiSecret;
    public PlaceSingleBetHeaders withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiTicket")
    public String apiTicket;
    public PlaceSingleBetHeaders withApiTicket(String apiTicket) {
        this.apiTicket = apiTicket;
        return this;
    }
}