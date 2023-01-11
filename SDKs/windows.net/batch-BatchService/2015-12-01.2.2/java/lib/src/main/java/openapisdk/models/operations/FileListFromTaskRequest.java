package openapisdk.models.operations;



public class FileListFromTaskRequest {
    public FileListFromTaskPathParams pathParams;
    public FileListFromTaskRequest withPathParams(FileListFromTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileListFromTaskQueryParams queryParams;
    public FileListFromTaskRequest withQueryParams(FileListFromTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileListFromTaskHeaders headers;
    public FileListFromTaskRequest withHeaders(FileListFromTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}