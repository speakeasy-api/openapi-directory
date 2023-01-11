package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminMappingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminMappingsRequestBody request;
    public PostAdminMappingsRequest withRequest(PostAdminMappingsRequestBody request) {
        this.request = request;
        return this;
    }
}