package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEntityConnectionsRequest {
    public PostEntityConnectionsHeaders headers;
    public PostEntityConnectionsRequest withHeaders(PostEntityConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostEntityConnectionsType request;
    public PostEntityConnectionsRequest withRequest(openapisdk.models.shared.PostEntityConnectionsType request) {
        this.request = request;
        return this;
    }
}