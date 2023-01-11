package openapisdk.models.operations;



public class PatchUpdateWorkflowResponse {
    public String contentType;
    public PatchUpdateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteWorkflowError deleteWorkflowError;
    public PatchUpdateWorkflowResponse withDeleteWorkflowError(openapisdk.models.shared.DeleteWorkflowError deleteWorkflowError) {
        this.deleteWorkflowError = deleteWorkflowError;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowSetupResponse getWorkflowSetupResponse;
    public PatchUpdateWorkflowResponse withGetWorkflowSetupResponse(openapisdk.models.shared.GetWorkflowSetupResponse getWorkflowSetupResponse) {
        this.getWorkflowSetupResponse = getWorkflowSetupResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchUpdateWorkflowResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchUpdateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public PatchUpdateWorkflowResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}