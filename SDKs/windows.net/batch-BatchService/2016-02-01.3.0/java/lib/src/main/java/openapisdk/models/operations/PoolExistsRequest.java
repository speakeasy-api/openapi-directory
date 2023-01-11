package openapisdk.models.operations;



public class PoolExistsRequest {
    public PoolExistsPathParams pathParams;
    public PoolExistsRequest withPathParams(PoolExistsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolExistsQueryParams queryParams;
    public PoolExistsRequest withQueryParams(PoolExistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolExistsHeaders headers;
    public PoolExistsRequest withHeaders(PoolExistsHeaders headers) {
        this.headers = headers;
        return this;
    }
}