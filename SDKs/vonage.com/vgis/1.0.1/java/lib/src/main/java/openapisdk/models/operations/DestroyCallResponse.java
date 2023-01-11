package openapisdk.models.operations;



public class DestroyCallResponse {
    public openapisdk.models.shared.Call[] calls;
    public DestroyCallResponse withCalls(openapisdk.models.shared.Call[] calls) {
        this.calls = calls;
        return this;
    }
    public String contentType;
    public DestroyCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DestroyCallResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DestroyCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}