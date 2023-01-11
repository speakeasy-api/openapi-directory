package openapisdk.models.operations;



public class ReportMeetingsResponse {
    public byte[] body;
    public ReportMeetingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportMeetingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportMeetingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportMeetings200ApplicationJson reportMeetings200ApplicationJSONObject;
    public ReportMeetingsResponse withReportMeetings200ApplicationJsonObject(ReportMeetings200ApplicationJson reportMeetings200ApplicationJSONObject) {
        this.reportMeetings200ApplicationJSONObject = reportMeetings200ApplicationJSONObject;
        return this;
    }
}