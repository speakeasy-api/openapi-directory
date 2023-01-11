package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeDisableSchedulingRequest {
    public ComputeNodeDisableSchedulingPathParams pathParams;
    public ComputeNodeDisableSchedulingRequest withPathParams(ComputeNodeDisableSchedulingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeDisableSchedulingQueryParams queryParams;
    public ComputeNodeDisableSchedulingRequest withQueryParams(ComputeNodeDisableSchedulingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeDisableSchedulingHeaders headers;
    public ComputeNodeDisableSchedulingRequest withHeaders(ComputeNodeDisableSchedulingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ComputeNodeDisableSchedulingRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}