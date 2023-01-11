package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolUpgradeOsRequest {
    public PoolUpgradeOsPathParams pathParams;
    public PoolUpgradeOsRequest withPathParams(PoolUpgradeOsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolUpgradeOsQueryParams queryParams;
    public PoolUpgradeOsRequest withQueryParams(PoolUpgradeOsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolUpgradeOsHeaders headers;
    public PoolUpgradeOsRequest withHeaders(PoolUpgradeOsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolUpgradeOsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}