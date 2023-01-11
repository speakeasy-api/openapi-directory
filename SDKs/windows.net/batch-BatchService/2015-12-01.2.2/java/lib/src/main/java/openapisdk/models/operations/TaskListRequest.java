package openapisdk.models.operations;



public class TaskListRequest {
    public TaskListPathParams pathParams;
    public TaskListRequest withPathParams(TaskListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskListQueryParams queryParams;
    public TaskListRequest withQueryParams(TaskListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskListHeaders headers;
    public TaskListRequest withHeaders(TaskListHeaders headers) {
        this.headers = headers;
        return this;
    }
}