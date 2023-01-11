package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CashinHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiKey")
    public String apiKey;
    public CashinHeaders withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiSecret")
    public String apiSecret;
    public CashinHeaders withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiTicket")
    public String apiTicket;
    public CashinHeaders withApiTicket(String apiTicket) {
        this.apiTicket = apiTicket;
        return this;
    }
}