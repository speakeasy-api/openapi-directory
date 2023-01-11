package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolEnableAutoScaleRequest {
    public PoolEnableAutoScalePathParams pathParams;
    public PoolEnableAutoScaleRequest withPathParams(PoolEnableAutoScalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolEnableAutoScaleQueryParams queryParams;
    public PoolEnableAutoScaleRequest withQueryParams(PoolEnableAutoScaleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolEnableAutoScaleHeaders headers;
    public PoolEnableAutoScaleRequest withHeaders(PoolEnableAutoScaleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolEnableAutoScaleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}