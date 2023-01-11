package openapisdk.models.operations;



public class GetFeedConnectionsResponse {
    public String contentType;
    public GetFeedConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeedConnections feedConnections;
    public GetFeedConnectionsResponse withFeedConnections(openapisdk.models.shared.FeedConnections feedConnections) {
        this.feedConnections = feedConnections;
        return this;
    }
    public Long statusCode;
    public GetFeedConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}