package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRequestsCountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminRequestsCountRequestBody request;
    public PostAdminRequestsCountRequest withRequest(PostAdminRequestsCountRequestBody request) {
        this.request = request;
        return this;
    }
}