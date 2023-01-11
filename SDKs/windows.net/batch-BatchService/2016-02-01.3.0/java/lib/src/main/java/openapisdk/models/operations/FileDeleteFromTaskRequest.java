package openapisdk.models.operations;



public class FileDeleteFromTaskRequest {
    public FileDeleteFromTaskPathParams pathParams;
    public FileDeleteFromTaskRequest withPathParams(FileDeleteFromTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileDeleteFromTaskQueryParams queryParams;
    public FileDeleteFromTaskRequest withQueryParams(FileDeleteFromTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileDeleteFromTaskHeaders headers;
    public FileDeleteFromTaskRequest withHeaders(FileDeleteFromTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}