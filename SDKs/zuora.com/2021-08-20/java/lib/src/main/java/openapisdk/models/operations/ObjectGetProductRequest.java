package openapisdk.models.operations;



public class ObjectGetProductRequest {
    public ObjectGetProductPathParams pathParams;
    public ObjectGetProductRequest withPathParams(ObjectGetProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetProductQueryParams queryParams;
    public ObjectGetProductRequest withQueryParams(ObjectGetProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetProductHeaders headers;
    public ObjectGetProductRequest withHeaders(ObjectGetProductHeaders headers) {
        this.headers = headers;
        return this;
    }
}