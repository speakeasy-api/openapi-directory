package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutTaxationItemRequest {
    public ObjectPutTaxationItemPathParams pathParams;
    public ObjectPutTaxationItemRequest withPathParams(ObjectPutTaxationItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutTaxationItemQueryParams queryParams;
    public ObjectPutTaxationItemRequest withQueryParams(ObjectPutTaxationItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutTaxationItemHeaders headers;
    public ObjectPutTaxationItemRequest withHeaders(ObjectPutTaxationItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutTaxationItemRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}