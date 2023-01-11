package openapisdk.models.operations;



public class ReportWebinarParticipantsResponse {
    public byte[] body;
    public ReportWebinarParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportWebinarParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportWebinarParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportWebinarParticipants200ApplicationJson reportWebinarParticipants200ApplicationJSONObject;
    public ReportWebinarParticipantsResponse withReportWebinarParticipants200ApplicationJsonObject(ReportWebinarParticipants200ApplicationJson reportWebinarParticipants200ApplicationJSONObject) {
        this.reportWebinarParticipants200ApplicationJSONObject = reportWebinarParticipants200ApplicationJSONObject;
        return this;
    }
}