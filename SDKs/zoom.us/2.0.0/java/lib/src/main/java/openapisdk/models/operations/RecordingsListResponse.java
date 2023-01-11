package openapisdk.models.operations;



public class RecordingsListResponse {
    public byte[] body;
    public RecordingsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RecordingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RecordingsListRecordingList recordingList;
    public RecordingsListResponse withRecordingList(RecordingsListRecordingList recordingList) {
        this.recordingList = recordingList;
        return this;
    }
    public Long statusCode;
    public RecordingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}