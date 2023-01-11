package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolEvaluateAutoScaleRequest {
    public PoolEvaluateAutoScalePathParams pathParams;
    public PoolEvaluateAutoScaleRequest withPathParams(PoolEvaluateAutoScalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolEvaluateAutoScaleQueryParams queryParams;
    public PoolEvaluateAutoScaleRequest withQueryParams(PoolEvaluateAutoScaleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolEvaluateAutoScaleHeaders headers;
    public PoolEvaluateAutoScaleRequest withHeaders(PoolEvaluateAutoScaleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolEvaluateAutoScaleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}