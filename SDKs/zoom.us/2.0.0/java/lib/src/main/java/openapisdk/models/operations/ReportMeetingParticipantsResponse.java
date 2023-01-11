package openapisdk.models.operations;



public class ReportMeetingParticipantsResponse {
    public byte[] body;
    public ReportMeetingParticipantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportMeetingParticipantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportMeetingParticipantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportMeetingParticipants200ApplicationJson reportMeetingParticipants200ApplicationJSONObject;
    public ReportMeetingParticipantsResponse withReportMeetingParticipants200ApplicationJsonObject(ReportMeetingParticipants200ApplicationJson reportMeetingParticipants200ApplicationJSONObject) {
        this.reportMeetingParticipants200ApplicationJSONObject = reportMeetingParticipants200ApplicationJSONObject;
        return this;
    }
}