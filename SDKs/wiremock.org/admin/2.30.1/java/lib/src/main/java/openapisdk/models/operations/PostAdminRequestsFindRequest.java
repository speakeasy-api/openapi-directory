package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRequestsFindRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminRequestsFindRequestBody request;
    public PostAdminRequestsFindRequest withRequest(PostAdminRequestsFindRequestBody request) {
        this.request = request;
        return this;
    }
}