package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolAddRequest {
    public PoolAddQueryParams queryParams;
    public PoolAddRequest withQueryParams(PoolAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolAddHeaders headers;
    public PoolAddRequest withHeaders(PoolAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolAddRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}