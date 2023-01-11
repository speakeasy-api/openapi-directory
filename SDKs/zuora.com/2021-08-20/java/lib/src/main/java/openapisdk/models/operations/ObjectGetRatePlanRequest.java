package openapisdk.models.operations;



public class ObjectGetRatePlanRequest {
    public ObjectGetRatePlanPathParams pathParams;
    public ObjectGetRatePlanRequest withPathParams(ObjectGetRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetRatePlanQueryParams queryParams;
    public ObjectGetRatePlanRequest withQueryParams(ObjectGetRatePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetRatePlanHeaders headers;
    public ObjectGetRatePlanRequest withHeaders(ObjectGetRatePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
}