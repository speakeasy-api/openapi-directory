package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBetHistoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiKey")
    public String apiKey;
    public GetBetHistoryHeaders withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiSecret")
    public String apiSecret;
    public GetBetHistoryHeaders withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiTicket")
    public String apiTicket;
    public GetBetHistoryHeaders withApiTicket(String apiTicket) {
        this.apiTicket = apiTicket;
        return this;
    }
}