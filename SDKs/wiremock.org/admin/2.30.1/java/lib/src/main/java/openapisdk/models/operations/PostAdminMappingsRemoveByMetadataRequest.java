package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminMappingsRemoveByMetadataRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAdminMappingsRemoveByMetadataRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}