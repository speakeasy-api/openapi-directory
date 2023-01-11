package openapisdk.models.operations;



public class PoolListRequest {
    public PoolListQueryParams queryParams;
    public PoolListRequest withQueryParams(PoolListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolListHeaders headers;
    public PoolListRequest withHeaders(PoolListHeaders headers) {
        this.headers = headers;
        return this;
    }
}