package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminNearMissesRequestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminNearMissesRequestRequestBody request;
    public PostAdminNearMissesRequestRequest withRequest(PostAdminNearMissesRequestRequestBody request) {
        this.request = request;
        return this;
    }
}