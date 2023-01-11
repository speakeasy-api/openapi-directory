package openapisdk.models.operations;



public class ReportWebinarPollsResponse {
    public byte[] body;
    public ReportWebinarPollsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportWebinarPollsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportWebinarPollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportWebinarPolls200ApplicationJson reportWebinarPolls200ApplicationJSONObject;
    public ReportWebinarPollsResponse withReportWebinarPolls200ApplicationJsonObject(ReportWebinarPolls200ApplicationJson reportWebinarPolls200ApplicationJSONObject) {
        this.reportWebinarPolls200ApplicationJSONObject = reportWebinarPolls200ApplicationJSONObject;
        return this;
    }
}