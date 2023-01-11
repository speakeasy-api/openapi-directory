package openapisdk.models.operations;



public class PostEventTriggerResponse {
    public String contentType;
    public PostEventTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostEventTriggerResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.EventTrigger eventTrigger;
    public PostEventTriggerResponse withEventTrigger(openapisdk.models.shared.EventTrigger eventTrigger) {
        this.eventTrigger = eventTrigger;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostEventTriggerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostEventTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}