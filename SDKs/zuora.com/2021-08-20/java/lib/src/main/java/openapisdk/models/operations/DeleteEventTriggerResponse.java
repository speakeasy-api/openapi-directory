package openapisdk.models.operations;



public class DeleteEventTriggerResponse {
    public String contentType;
    public DeleteEventTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteEventTriggerResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteEventTriggerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteEventTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}