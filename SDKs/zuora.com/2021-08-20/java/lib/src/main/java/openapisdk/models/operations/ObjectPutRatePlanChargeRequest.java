package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutRatePlanChargeRequest {
    public ObjectPutRatePlanChargePathParams pathParams;
    public ObjectPutRatePlanChargeRequest withPathParams(ObjectPutRatePlanChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutRatePlanChargeQueryParams queryParams;
    public ObjectPutRatePlanChargeRequest withQueryParams(ObjectPutRatePlanChargeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutRatePlanChargeHeaders headers;
    public ObjectPutRatePlanChargeRequest withHeaders(ObjectPutRatePlanChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutRatePlanChargeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}