package openapisdk.models.operations;



public class GetEventResponse {
    public String contentType;
    public GetEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEventResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public GetEventResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public GetEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}