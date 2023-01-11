package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminSettingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminSettingsRequestBody request;
    public PostAdminSettingsRequest withRequest(PostAdminSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}