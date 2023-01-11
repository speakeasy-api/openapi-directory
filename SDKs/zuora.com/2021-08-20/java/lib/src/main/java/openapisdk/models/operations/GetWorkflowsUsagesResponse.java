package openapisdk.models.operations;



public class GetWorkflowsUsagesResponse {
    public String contentType;
    public GetWorkflowsUsagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowsUsagesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowsUsagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsagesResponse usagesResponse;
    public GetWorkflowsUsagesResponse withUsagesResponse(openapisdk.models.shared.UsagesResponse usagesResponse) {
        this.usagesResponse = usagesResponse;
        return this;
    }
}