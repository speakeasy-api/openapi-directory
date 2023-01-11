package openapisdk.models.operations;



public class ObjectGetAccountRequest {
    public ObjectGetAccountPathParams pathParams;
    public ObjectGetAccountRequest withPathParams(ObjectGetAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetAccountQueryParams queryParams;
    public ObjectGetAccountRequest withQueryParams(ObjectGetAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetAccountHeaders headers;
    public ObjectGetAccountRequest withHeaders(ObjectGetAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
}