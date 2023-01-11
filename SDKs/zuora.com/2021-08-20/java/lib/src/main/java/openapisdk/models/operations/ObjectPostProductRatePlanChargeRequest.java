package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostProductRatePlanChargeRequest {
    public ObjectPostProductRatePlanChargeQueryParams queryParams;
    public ObjectPostProductRatePlanChargeRequest withQueryParams(ObjectPostProductRatePlanChargeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostProductRatePlanChargeHeaders headers;
    public ObjectPostProductRatePlanChargeRequest withHeaders(ObjectPostProductRatePlanChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostProductRatePlanChargeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}