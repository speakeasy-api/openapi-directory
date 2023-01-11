package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolUpdatePropertiesRequest {
    public PoolUpdatePropertiesPathParams pathParams;
    public PoolUpdatePropertiesRequest withPathParams(PoolUpdatePropertiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PoolUpdatePropertiesQueryParams queryParams;
    public PoolUpdatePropertiesRequest withQueryParams(PoolUpdatePropertiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PoolUpdatePropertiesHeaders headers;
    public PoolUpdatePropertiesRequest withHeaders(PoolUpdatePropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PoolUpdatePropertiesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}