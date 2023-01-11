package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRequestsRemoveByMetadataRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAdminRequestsRemoveByMetadataRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}