package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdminRecordingsSnapshotRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAdminRecordingsSnapshotRequestBody request;
    public PostAdminRecordingsSnapshotRequest withRequest(PostAdminRecordingsSnapshotRequestBody request) {
        this.request = request;
        return this;
    }
}