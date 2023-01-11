package openapisdk.models.operations;



public class ListEventsResponse {
    public String contentType;
    public ListEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ListEventsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ListEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public ListEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}