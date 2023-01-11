package openapisdk.models.operations;



public class ReportUsersResponse {
    public byte[] body;
    public ReportUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportUsers200ApplicationJson reportUsers200ApplicationJSONObject;
    public ReportUsersResponse withReportUsers200ApplicationJsonObject(ReportUsers200ApplicationJson reportUsers200ApplicationJSONObject) {
        this.reportUsers200ApplicationJSONObject = reportUsers200ApplicationJSONObject;
        return this;
    }
}