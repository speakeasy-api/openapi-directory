package openapisdk.models.operations;



public class GetFeedConnectionResponse {
    public String contentType;
    public GetFeedConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeedConnection feedConnection;
    public GetFeedConnectionResponse withFeedConnection(openapisdk.models.shared.FeedConnection feedConnection) {
        this.feedConnection = feedConnection;
        return this;
    }
    public Long statusCode;
    public GetFeedConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}