package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolResizeRequest {
    public PoolResizePathParams pathParams;
    public PoolResizeRequest withPathParams(PoolResizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolResizeQueryParams queryParams;
    public PoolResizeRequest withQueryParams(PoolResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolResizeHeaders headers;
    public PoolResizeRequest withHeaders(PoolResizeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolResizeRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}