package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDebitMemoRequest {
    public PutDebitMemoPathParams pathParams;
    public PutDebitMemoRequest withPathParams(PutDebitMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDebitMemoHeaders headers;
    public PutDebitMemoRequest withHeaders(PutDebitMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutDebitMemoRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}