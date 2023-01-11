package openapisdk.models.operations;



public class CreateFeedConnectionsResponse {
    public String contentType;
    public CreateFeedConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateFeedConnectionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.FeedConnections feedConnections;
    public CreateFeedConnectionsResponse withFeedConnections(openapisdk.models.shared.FeedConnections feedConnections) {
        this.feedConnections = feedConnections;
        return this;
    }
    public Long statusCode;
    public CreateFeedConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}