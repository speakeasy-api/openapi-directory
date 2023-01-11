package openapisdk.models.operations;



public class GetEventsCountResponse {
    public String contentType;
    public GetEventsCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEventsCountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.EventsCount eventsCount;
    public GetEventsCountResponse withEventsCount(openapisdk.models.shared.EventsCount eventsCount) {
        this.eventsCount = eventsCount;
        return this;
    }
    public Long statusCode;
    public GetEventsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}