package openapisdk.models.operations;



public class PutEventTriggerResponse {
    public String contentType;
    public PutEventTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PutEventTriggerResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.EventTrigger eventTrigger;
    public PutEventTriggerResponse withEventTrigger(openapisdk.models.shared.EventTrigger eventTrigger) {
        this.eventTrigger = eventTrigger;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutEventTriggerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutEventTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}