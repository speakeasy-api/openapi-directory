package openapisdk.models.operations;



public class DeleteWorkflowResponse {
    public String contentType;
    public DeleteWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteWorkflowError deleteWorkflowError;
    public DeleteWorkflowResponse withDeleteWorkflowError(openapisdk.models.shared.DeleteWorkflowError deleteWorkflowError) {
        this.deleteWorkflowError = deleteWorkflowError;
        return this;
    }
    public openapisdk.models.shared.DeleteWorkflowSuccess deleteWorkflowSuccess;
    public DeleteWorkflowResponse withDeleteWorkflowSuccess(openapisdk.models.shared.DeleteWorkflowSuccess deleteWorkflowSuccess) {
        this.deleteWorkflowSuccess = deleteWorkflowSuccess;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteWorkflowResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}