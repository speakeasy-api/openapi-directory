package openapisdk.models.operations;



public class ReportMeetingDetailsResponse {
    public byte[] body;
    public ReportMeetingDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportMeetingDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportMeetingDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportMeetingDetails200ApplicationJson reportMeetingDetails200ApplicationJSONObject;
    public ReportMeetingDetailsResponse withReportMeetingDetails200ApplicationJsonObject(ReportMeetingDetails200ApplicationJson reportMeetingDetails200ApplicationJSONObject) {
        this.reportMeetingDetails200ApplicationJSONObject = reportMeetingDetails200ApplicationJSONObject;
        return this;
    }
}