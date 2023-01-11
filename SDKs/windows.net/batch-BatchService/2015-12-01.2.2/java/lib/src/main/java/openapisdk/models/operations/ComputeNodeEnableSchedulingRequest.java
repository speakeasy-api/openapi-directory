package openapisdk.models.operations;



public class ComputeNodeEnableSchedulingRequest {
    public ComputeNodeEnableSchedulingPathParams pathParams;
    public ComputeNodeEnableSchedulingRequest withPathParams(ComputeNodeEnableSchedulingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeEnableSchedulingQueryParams queryParams;
    public ComputeNodeEnableSchedulingRequest withQueryParams(ComputeNodeEnableSchedulingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeEnableSchedulingHeaders headers;
    public ComputeNodeEnableSchedulingRequest withHeaders(ComputeNodeEnableSchedulingHeaders headers) {
        this.headers = headers;
        return this;
    }
}