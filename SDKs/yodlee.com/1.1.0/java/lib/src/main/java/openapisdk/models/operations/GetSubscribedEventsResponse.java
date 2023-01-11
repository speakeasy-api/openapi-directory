package openapisdk.models.operations;



public class GetSubscribedEventsResponse {
    public openapisdk.models.shared.CobrandNotificationResponse cobrandNotificationResponse;
    public GetSubscribedEventsResponse withCobrandNotificationResponse(openapisdk.models.shared.CobrandNotificationResponse cobrandNotificationResponse) {
        this.cobrandNotificationResponse = cobrandNotificationResponse;
        return this;
    }
    public String contentType;
    public GetSubscribedEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubscribedEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}