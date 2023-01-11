package openapisdk.models.operations;



public class GetWorkflowExportRequest {
    public GetWorkflowExportPathParams pathParams;
    public GetWorkflowExportRequest withPathParams(GetWorkflowExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkflowExportHeaders headers;
    public GetWorkflowExportRequest withHeaders(GetWorkflowExportHeaders headers) {
        this.headers = headers;
        return this;
    }
}