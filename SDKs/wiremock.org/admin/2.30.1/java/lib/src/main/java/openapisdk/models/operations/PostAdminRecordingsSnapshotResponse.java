package openapisdk.models.operations;



public class PostAdminRecordingsSnapshotResponse {
    public String contentType;
    public PostAdminRecordingsSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAdminRecordingsSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAdminRecordingsSnapshot200ApplicationJson postAdminRecordingsSnapshot200ApplicationJSONObject;
    public PostAdminRecordingsSnapshotResponse withPostAdminRecordingsSnapshot200ApplicationJsonObject(PostAdminRecordingsSnapshot200ApplicationJson postAdminRecordingsSnapshot200ApplicationJSONObject) {
        this.postAdminRecordingsSnapshot200ApplicationJSONObject = postAdminRecordingsSnapshot200ApplicationJSONObject;
        return this;
    }
}