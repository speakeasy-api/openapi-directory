package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeAddUserRequest {
    public ComputeNodeAddUserPathParams pathParams;
    public ComputeNodeAddUserRequest withPathParams(ComputeNodeAddUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeAddUserQueryParams queryParams;
    public ComputeNodeAddUserRequest withQueryParams(ComputeNodeAddUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeAddUserHeaders headers;
    public ComputeNodeAddUserRequest withHeaders(ComputeNodeAddUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ComputeNodeAddUserRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}