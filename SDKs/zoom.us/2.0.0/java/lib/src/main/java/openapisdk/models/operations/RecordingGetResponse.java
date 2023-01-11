package openapisdk.models.operations;



public class RecordingGetResponse {
    public byte[] body;
    public RecordingGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RecordingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RecordingGetRecordingFileList recordingFileList;
    public RecordingGetResponse withRecordingFileList(RecordingGetRecordingFileList recordingFileList) {
        this.recordingFileList = recordingFileList;
        return this;
    }
    public Long statusCode;
    public RecordingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}