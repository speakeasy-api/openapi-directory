package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeUpdateUserRequest {
    public ComputeNodeUpdateUserPathParams pathParams;
    public ComputeNodeUpdateUserRequest withPathParams(ComputeNodeUpdateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeUpdateUserQueryParams queryParams;
    public ComputeNodeUpdateUserRequest withQueryParams(ComputeNodeUpdateUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeUpdateUserHeaders headers;
    public ComputeNodeUpdateUserRequest withHeaders(ComputeNodeUpdateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ComputeNodeUpdateUserRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}