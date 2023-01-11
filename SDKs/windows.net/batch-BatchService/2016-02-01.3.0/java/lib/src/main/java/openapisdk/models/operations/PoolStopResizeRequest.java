package openapisdk.models.operations;



public class PoolStopResizeRequest {
    public PoolStopResizePathParams pathParams;
    public PoolStopResizeRequest withPathParams(PoolStopResizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolStopResizeQueryParams queryParams;
    public PoolStopResizeRequest withQueryParams(PoolStopResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolStopResizeHeaders headers;
    public PoolStopResizeRequest withHeaders(PoolStopResizeHeaders headers) {
        this.headers = headers;
        return this;
    }
}