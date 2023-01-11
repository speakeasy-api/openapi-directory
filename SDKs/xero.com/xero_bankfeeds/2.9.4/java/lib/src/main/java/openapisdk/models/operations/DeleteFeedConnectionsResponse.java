package openapisdk.models.operations;



public class DeleteFeedConnectionsResponse {
    public String contentType;
    public DeleteFeedConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeedConnections feedConnections;
    public DeleteFeedConnectionsResponse withFeedConnections(openapisdk.models.shared.FeedConnections feedConnections) {
        this.feedConnections = feedConnections;
        return this;
    }
    public Long statusCode;
    public DeleteFeedConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}