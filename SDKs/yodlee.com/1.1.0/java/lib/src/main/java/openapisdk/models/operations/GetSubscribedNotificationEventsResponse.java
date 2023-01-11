package openapisdk.models.operations;



public class GetSubscribedNotificationEventsResponse {
    public openapisdk.models.shared.ConfigsNotificationResponse configsNotificationResponse;
    public GetSubscribedNotificationEventsResponse withConfigsNotificationResponse(openapisdk.models.shared.ConfigsNotificationResponse configsNotificationResponse) {
        this.configsNotificationResponse = configsNotificationResponse;
        return this;
    }
    public String contentType;
    public GetSubscribedNotificationEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubscribedNotificationEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}