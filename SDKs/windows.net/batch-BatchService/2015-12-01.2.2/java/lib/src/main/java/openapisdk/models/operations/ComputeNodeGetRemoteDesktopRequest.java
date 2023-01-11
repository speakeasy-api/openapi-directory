package openapisdk.models.operations;



public class ComputeNodeGetRemoteDesktopRequest {
    public ComputeNodeGetRemoteDesktopPathParams pathParams;
    public ComputeNodeGetRemoteDesktopRequest withPathParams(ComputeNodeGetRemoteDesktopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComputeNodeGetRemoteDesktopQueryParams queryParams;
    public ComputeNodeGetRemoteDesktopRequest withQueryParams(ComputeNodeGetRemoteDesktopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ComputeNodeGetRemoteDesktopHeaders headers;
    public ComputeNodeGetRemoteDesktopRequest withHeaders(ComputeNodeGetRemoteDesktopHeaders headers) {
        this.headers = headers;
        return this;
    }
}