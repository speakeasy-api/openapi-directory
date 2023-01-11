package openapisdk.models.operations;



public class CreateSubscriptionNotificationEventResponse {
    public String contentType;
    public CreateSubscriptionNotificationEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSubscriptionNotificationEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public CreateSubscriptionNotificationEventResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}