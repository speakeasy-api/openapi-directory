package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteSellTrasactionRequest {
    public ExecuteSellTrasactionHeaders headers;
    public ExecuteSellTrasactionRequest withHeaders(ExecuteSellTrasactionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ExecuteSellTrasactionSellTransactionRequest request;
    public ExecuteSellTrasactionRequest withRequest(ExecuteSellTrasactionSellTransactionRequest request) {
        this.request = request;
        return this;
    }
    public ExecuteSellTrasactionSecurity security;
    public ExecuteSellTrasactionRequest withSecurity(ExecuteSellTrasactionSecurity security) {
        this.security = security;
        return this;
    }
}