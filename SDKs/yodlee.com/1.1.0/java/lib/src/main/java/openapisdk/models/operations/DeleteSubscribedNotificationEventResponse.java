package openapisdk.models.operations;



public class DeleteSubscribedNotificationEventResponse {
    public String contentType;
    public DeleteSubscribedNotificationEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSubscribedNotificationEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public DeleteSubscribedNotificationEventResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}