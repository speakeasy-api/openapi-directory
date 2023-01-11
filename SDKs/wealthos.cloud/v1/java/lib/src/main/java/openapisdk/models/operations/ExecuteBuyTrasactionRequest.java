package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteBuyTrasactionRequest {
    public ExecuteBuyTrasactionHeaders headers;
    public ExecuteBuyTrasactionRequest withHeaders(ExecuteBuyTrasactionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ExecuteBuyTrasactionBuyTransactionRequest request;
    public ExecuteBuyTrasactionRequest withRequest(ExecuteBuyTrasactionBuyTransactionRequest request) {
        this.request = request;
        return this;
    }
    public ExecuteBuyTrasactionSecurity security;
    public ExecuteBuyTrasactionRequest withSecurity(ExecuteBuyTrasactionSecurity security) {
        this.security = security;
        return this;
    }
}