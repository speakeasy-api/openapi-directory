package openapisdk.models.operations;



public class ReportOperationLogsResponse {
    public byte[] body;
    public ReportOperationLogsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportOperationLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportOperationLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportOperationLogs200ApplicationJson reportOperationLogs200ApplicationJSONObject;
    public ReportOperationLogsResponse withReportOperationLogs200ApplicationJsonObject(ReportOperationLogs200ApplicationJson reportOperationLogs200ApplicationJSONObject) {
        this.reportOperationLogs200ApplicationJSONObject = reportOperationLogs200ApplicationJSONObject;
        return this;
    }
}