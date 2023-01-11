package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRatePlanRequest {
    public ObjectPutProductRatePlanPathParams pathParams;
    public ObjectPutProductRatePlanRequest withPathParams(ObjectPutProductRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutProductRatePlanQueryParams queryParams;
    public ObjectPutProductRatePlanRequest withQueryParams(ObjectPutProductRatePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutProductRatePlanHeaders headers;
    public ObjectPutProductRatePlanRequest withHeaders(ObjectPutProductRatePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutProductRatePlanRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}