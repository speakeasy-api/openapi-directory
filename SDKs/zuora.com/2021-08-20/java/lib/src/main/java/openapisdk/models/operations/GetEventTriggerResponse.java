package openapisdk.models.operations;



public class GetEventTriggerResponse {
    public String contentType;
    public GetEventTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEventTriggerResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.EventTrigger eventTrigger;
    public GetEventTriggerResponse withEventTrigger(openapisdk.models.shared.EventTrigger eventTrigger) {
        this.eventTrigger = eventTrigger;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventTriggerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}