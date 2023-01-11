package openapisdk.models.operations;



public class ComputeNodeGetRequest {
    public ComputeNodeGetPathParams pathParams;
    public ComputeNodeGetRequest withPathParams(ComputeNodeGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeGetQueryParams queryParams;
    public ComputeNodeGetRequest withQueryParams(ComputeNodeGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeGetHeaders headers;
    public ComputeNodeGetRequest withHeaders(ComputeNodeGetHeaders headers) {
        this.headers = headers;
        return this;
    }
}