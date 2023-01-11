package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFeedConnectionsRequest {
    public CreateFeedConnectionsHeaders headers;
    public CreateFeedConnectionsRequest withHeaders(CreateFeedConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FeedConnections request;
    public CreateFeedConnectionsRequest withRequest(openapisdk.models.shared.FeedConnections request) {
        this.request = request;
        return this;
    }
    public CreateFeedConnectionsSecurity security;
    public CreateFeedConnectionsRequest withSecurity(CreateFeedConnectionsSecurity security) {
        this.security = security;
        return this;
    }
}