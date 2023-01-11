package openapisdk.models.operations;



public class TaskTerminateRequest {
    public TaskTerminatePathParams pathParams;
    public TaskTerminateRequest withPathParams(TaskTerminatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskTerminateQueryParams queryParams;
    public TaskTerminateRequest withQueryParams(TaskTerminateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskTerminateHeaders headers;
    public TaskTerminateRequest withHeaders(TaskTerminateHeaders headers) {
        this.headers = headers;
        return this;
    }
}