package openapisdk.models.operations;



public class GetCallsCountResponse {
    public String contentType;
    public GetCallsCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCallsCountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.EventsCount eventsCount;
    public GetCallsCountResponse withEventsCount(openapisdk.models.shared.EventsCount eventsCount) {
        this.eventsCount = eventsCount;
        return this;
    }
    public Long statusCode;
    public GetCallsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}