package openapisdk.models.operations;



public class RecordingSettingUpdateResponse {
    public byte[] body;
    public RecordingSettingUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RecordingSettingUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RecordingSettingUpdateRecordingSettings recordingSettings;
    public RecordingSettingUpdateResponse withRecordingSettings(RecordingSettingUpdateRecordingSettings recordingSettings) {
        this.recordingSettings = recordingSettings;
        return this;
    }
    public Long statusCode;
    public RecordingSettingUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}