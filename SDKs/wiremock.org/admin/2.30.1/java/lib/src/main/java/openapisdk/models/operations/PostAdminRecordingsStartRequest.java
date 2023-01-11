package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRecordingsStartRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminRecordingsStartRequestBody request;
    public PostAdminRecordingsStartRequest withRequest(PostAdminRecordingsStartRequestBody request) {
        this.request = request;
        return this;
    }
}