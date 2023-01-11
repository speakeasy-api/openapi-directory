package openapisdk.models.operations;



public class UpdateSubscribedNotificationEventResponse {
    public String contentType;
    public UpdateSubscribedNotificationEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSubscribedNotificationEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public UpdateSubscribedNotificationEventResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}