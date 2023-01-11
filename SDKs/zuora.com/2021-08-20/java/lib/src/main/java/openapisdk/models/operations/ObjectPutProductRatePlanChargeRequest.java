package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRatePlanChargeRequest {
    public ObjectPutProductRatePlanChargePathParams pathParams;
    public ObjectPutProductRatePlanChargeRequest withPathParams(ObjectPutProductRatePlanChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutProductRatePlanChargeQueryParams queryParams;
    public ObjectPutProductRatePlanChargeRequest withQueryParams(ObjectPutProductRatePlanChargeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutProductRatePlanChargeHeaders headers;
    public ObjectPutProductRatePlanChargeRequest withHeaders(ObjectPutProductRatePlanChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutProductRatePlanChargeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}