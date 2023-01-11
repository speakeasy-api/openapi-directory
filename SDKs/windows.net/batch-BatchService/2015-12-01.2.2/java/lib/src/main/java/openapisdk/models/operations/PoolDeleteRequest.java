package openapisdk.models.operations;



public class PoolDeleteRequest {
    public PoolDeletePathParams pathParams;
    public PoolDeleteRequest withPathParams(PoolDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolDeleteQueryParams queryParams;
    public PoolDeleteRequest withQueryParams(PoolDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolDeleteHeaders headers;
    public PoolDeleteRequest withHeaders(PoolDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
}