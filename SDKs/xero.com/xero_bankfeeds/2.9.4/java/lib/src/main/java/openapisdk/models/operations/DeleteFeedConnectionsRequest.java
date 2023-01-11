package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFeedConnectionsRequest {
    public DeleteFeedConnectionsHeaders headers;
    public DeleteFeedConnectionsRequest withHeaders(DeleteFeedConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FeedConnections request;
    public DeleteFeedConnectionsRequest withRequest(openapisdk.models.shared.FeedConnections request) {
        this.request = request;
        return this;
    }
    public DeleteFeedConnectionsSecurity security;
    public DeleteFeedConnectionsRequest withSecurity(DeleteFeedConnectionsSecurity security) {
        this.security = security;
        return this;
    }
}