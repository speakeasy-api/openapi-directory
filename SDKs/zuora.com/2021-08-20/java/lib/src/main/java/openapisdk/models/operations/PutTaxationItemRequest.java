package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTaxationItemRequest {
    public PutTaxationItemPathParams pathParams;
    public PutTaxationItemRequest withPathParams(PutTaxationItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutTaxationItemHeaders headers;
    public PutTaxationItemRequest withHeaders(PutTaxationItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutTaxationItemRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}