package openapisdk.models.operations;



public class ReportMeetingPollsResponse {
    public byte[] body;
    public ReportMeetingPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportMeetingPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportMeetingPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportMeetingPolls200ApplicationJson reportMeetingPolls200ApplicationJSONObject;
    public ReportMeetingPollsResponse withReportMeetingPolls200ApplicationJsonObject(ReportMeetingPolls200ApplicationJson reportMeetingPolls200ApplicationJSONObject) {
        this.reportMeetingPolls200ApplicationJSONObject = reportMeetingPolls200ApplicationJSONObject;
        return this;
    }
}