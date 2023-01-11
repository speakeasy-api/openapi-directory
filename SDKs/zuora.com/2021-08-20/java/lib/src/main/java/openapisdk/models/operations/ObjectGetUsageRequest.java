package openapisdk.models.operations;



public class ObjectGetUsageRequest {
    public ObjectGetUsagePathParams pathParams;
    public ObjectGetUsageRequest withPathParams(ObjectGetUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetUsageQueryParams queryParams;
    public ObjectGetUsageRequest withQueryParams(ObjectGetUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetUsageHeaders headers;
    public ObjectGetUsageRequest withHeaders(ObjectGetUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
}