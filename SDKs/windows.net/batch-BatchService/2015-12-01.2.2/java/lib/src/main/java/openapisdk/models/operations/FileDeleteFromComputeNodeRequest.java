package openapisdk.models.operations;



public class FileDeleteFromComputeNodeRequest {
    public FileDeleteFromComputeNodePathParams pathParams;
    public FileDeleteFromComputeNodeRequest withPathParams(FileDeleteFromComputeNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileDeleteFromComputeNodeQueryParams queryParams;
    public FileDeleteFromComputeNodeRequest withQueryParams(FileDeleteFromComputeNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileDeleteFromComputeNodeHeaders headers;
    public FileDeleteFromComputeNodeRequest withHeaders(FileDeleteFromComputeNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
}