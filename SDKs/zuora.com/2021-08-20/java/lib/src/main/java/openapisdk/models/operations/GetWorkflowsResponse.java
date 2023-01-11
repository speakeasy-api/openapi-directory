package openapisdk.models.operations;



public class GetWorkflowsResponse {
    public String contentType;
    public GetWorkflowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowsResponse getWorkflowsResponse;
    public GetWorkflowsResponse withGetWorkflowsResponse(openapisdk.models.shared.GetWorkflowsResponse getWorkflowsResponse) {
        this.getWorkflowsResponse = getWorkflowsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}