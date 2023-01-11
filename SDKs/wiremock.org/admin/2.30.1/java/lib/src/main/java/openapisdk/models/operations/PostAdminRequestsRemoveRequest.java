package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRequestsRemoveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminRequestsRemoveRequestBody request;
    public PostAdminRequestsRemoveRequest withRequest(PostAdminRequestsRemoveRequestBody request) {
        this.request = request;
        return this;
    }
}