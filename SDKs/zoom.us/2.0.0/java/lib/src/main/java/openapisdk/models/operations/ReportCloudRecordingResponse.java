package openapisdk.models.operations;



public class ReportCloudRecordingResponse {
    public byte[] body;
    public ReportCloudRecordingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportCloudRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportCloudRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportCloudRecording200ApplicationJson reportCloudRecording200ApplicationJSONObject;
    public ReportCloudRecordingResponse withReportCloudRecording200ApplicationJsonObject(ReportCloudRecording200ApplicationJson reportCloudRecording200ApplicationJSONObject) {
        this.reportCloudRecording200ApplicationJSONObject = reportCloudRecording200ApplicationJSONObject;
        return this;
    }
}