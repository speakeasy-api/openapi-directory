package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeReimageRequest {
    public ComputeNodeReimagePathParams pathParams;
    public ComputeNodeReimageRequest withPathParams(ComputeNodeReimagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeReimageQueryParams queryParams;
    public ComputeNodeReimageRequest withQueryParams(ComputeNodeReimageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeReimageHeaders headers;
    public ComputeNodeReimageRequest withHeaders(ComputeNodeReimageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ComputeNodeReimageRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}