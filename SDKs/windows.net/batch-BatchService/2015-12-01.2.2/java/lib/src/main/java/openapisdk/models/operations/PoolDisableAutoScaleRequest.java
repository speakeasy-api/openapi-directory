package openapisdk.models.operations;



public class PoolDisableAutoScaleRequest {
    public PoolDisableAutoScalePathParams pathParams;
    public PoolDisableAutoScaleRequest withPathParams(PoolDisableAutoScalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolDisableAutoScaleQueryParams queryParams;
    public PoolDisableAutoScaleRequest withQueryParams(PoolDisableAutoScaleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolDisableAutoScaleHeaders headers;
    public PoolDisableAutoScaleRequest withHeaders(PoolDisableAutoScaleHeaders headers) {
        this.headers = headers;
        return this;
    }
}