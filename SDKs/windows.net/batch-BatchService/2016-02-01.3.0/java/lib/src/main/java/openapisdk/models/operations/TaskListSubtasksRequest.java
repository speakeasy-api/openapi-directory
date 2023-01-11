package openapisdk.models.operations;



public class TaskListSubtasksRequest {
    public TaskListSubtasksPathParams pathParams;
    public TaskListSubtasksRequest withPathParams(TaskListSubtasksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskListSubtasksQueryParams queryParams;
    public TaskListSubtasksRequest withQueryParams(TaskListSubtasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskListSubtasksHeaders headers;
    public TaskListSubtasksRequest withHeaders(TaskListSubtasksHeaders headers) {
        this.headers = headers;
        return this;
    }
}