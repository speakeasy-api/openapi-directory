package openapisdk.models.operations;



public class ObjectGetRatePlanChargeRequest {
    public ObjectGetRatePlanChargePathParams pathParams;
    public ObjectGetRatePlanChargeRequest withPathParams(ObjectGetRatePlanChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetRatePlanChargeQueryParams queryParams;
    public ObjectGetRatePlanChargeRequest withQueryParams(ObjectGetRatePlanChargeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetRatePlanChargeHeaders headers;
    public ObjectGetRatePlanChargeRequest withHeaders(ObjectGetRatePlanChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
}