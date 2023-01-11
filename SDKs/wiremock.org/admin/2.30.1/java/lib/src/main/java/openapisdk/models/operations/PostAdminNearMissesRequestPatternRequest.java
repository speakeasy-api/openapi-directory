package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminNearMissesRequestPatternRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminNearMissesRequestPatternRequestBody request;
    public PostAdminNearMissesRequestPatternRequest withRequest(PostAdminNearMissesRequestPatternRequestBody request) {
        this.request = request;
        return this;
    }
}