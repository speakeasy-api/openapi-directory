package openapisdk.models.operations;



public class GetWorkflowResponse {
    public String contentType;
    public GetWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowResponse getWorkflowResponse;
    public GetWorkflowResponse withGetWorkflowResponse(openapisdk.models.shared.GetWorkflowResponse getWorkflowResponse) {
        this.getWorkflowResponse = getWorkflowResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}