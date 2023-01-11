package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolPatchRequest {
    public PoolPatchPathParams pathParams;
    public PoolPatchRequest withPathParams(PoolPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolPatchQueryParams queryParams;
    public PoolPatchRequest withQueryParams(PoolPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolPatchHeaders headers;
    public PoolPatchRequest withHeaders(PoolPatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolPatchRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}