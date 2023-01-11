package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutProductRatePlanChargeTierRequest {
    public ObjectPutProductRatePlanChargeTierPathParams pathParams;
    public ObjectPutProductRatePlanChargeTierRequest withPathParams(ObjectPutProductRatePlanChargeTierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutProductRatePlanChargeTierQueryParams queryParams;
    public ObjectPutProductRatePlanChargeTierRequest withQueryParams(ObjectPutProductRatePlanChargeTierQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutProductRatePlanChargeTierHeaders headers;
    public ObjectPutProductRatePlanChargeTierRequest withHeaders(ObjectPutProductRatePlanChargeTierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyModifyProductRatePlanChargeTier request;
    public ObjectPutProductRatePlanChargeTierRequest withRequest(openapisdk.models.shared.ProxyModifyProductRatePlanChargeTier request) {
        this.request = request;
        return this;
    }
}