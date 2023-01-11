package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostTaxationItemRequest {
    public ObjectPostTaxationItemQueryParams queryParams;
    public ObjectPostTaxationItemRequest withQueryParams(ObjectPostTaxationItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostTaxationItemHeaders headers;
    public ObjectPostTaxationItemRequest withHeaders(ObjectPostTaxationItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostTaxationItemRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}