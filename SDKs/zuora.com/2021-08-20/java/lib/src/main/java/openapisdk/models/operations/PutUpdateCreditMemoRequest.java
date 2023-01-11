package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateCreditMemoRequest {
    public PutUpdateCreditMemoPathParams pathParams;
    public PutUpdateCreditMemoRequest withPathParams(PutUpdateCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateCreditMemoHeaders headers;
    public PutUpdateCreditMemoRequest withHeaders(PutUpdateCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutUpdateCreditMemoRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}