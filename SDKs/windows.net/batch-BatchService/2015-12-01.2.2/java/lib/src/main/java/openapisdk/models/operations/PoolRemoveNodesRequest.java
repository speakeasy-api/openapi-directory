package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolRemoveNodesRequest {
    public PoolRemoveNodesPathParams pathParams;
    public PoolRemoveNodesRequest withPathParams(PoolRemoveNodesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolRemoveNodesQueryParams queryParams;
    public PoolRemoveNodesRequest withQueryParams(PoolRemoveNodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolRemoveNodesHeaders headers;
    public PoolRemoveNodesRequest withHeaders(PoolRemoveNodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolRemoveNodesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}