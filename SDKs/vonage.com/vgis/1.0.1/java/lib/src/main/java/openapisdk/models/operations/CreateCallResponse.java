package openapisdk.models.operations;



public class CreateCallResponse {
    public openapisdk.models.shared.Call[] calls;
    public CreateCallResponse withCalls(openapisdk.models.shared.Call[] calls) {
        this.calls = calls;
        return this;
    }
    public String contentType;
    public CreateCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateCallResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}