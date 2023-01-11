package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeRebootRequest {
    public ComputeNodeRebootPathParams pathParams;
    public ComputeNodeRebootRequest withPathParams(ComputeNodeRebootPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeRebootQueryParams queryParams;
    public ComputeNodeRebootRequest withQueryParams(ComputeNodeRebootQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeRebootHeaders headers;
    public ComputeNodeRebootRequest withHeaders(ComputeNodeRebootHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ComputeNodeRebootRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}