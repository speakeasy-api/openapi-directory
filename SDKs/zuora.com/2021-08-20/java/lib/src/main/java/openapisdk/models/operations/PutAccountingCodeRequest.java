package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountingCodeRequest {
    public PutAccountingCodePathParams pathParams;
    public PutAccountingCodeRequest withPathParams(PutAccountingCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutAccountingCodeHeaders headers;
    public PutAccountingCodeRequest withHeaders(PutAccountingCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutAccountingCodeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}