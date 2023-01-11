package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostProductRatePlanRequest {
    public ObjectPostProductRatePlanQueryParams queryParams;
    public ObjectPostProductRatePlanRequest withQueryParams(ObjectPostProductRatePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostProductRatePlanHeaders headers;
    public ObjectPostProductRatePlanRequest withHeaders(ObjectPostProductRatePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostProductRatePlanRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}