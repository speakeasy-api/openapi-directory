package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminMappingsFindByMetadataRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAdminMappingsFindByMetadataRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}