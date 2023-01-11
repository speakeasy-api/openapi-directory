package openapisdk.models.operations;



public class ReportWebinarDetailsResponse {
    public byte[] body;
    public ReportWebinarDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportWebinarDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportWebinarDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportWebinarDetails200ApplicationJson reportWebinarDetails200ApplicationJSONObject;
    public ReportWebinarDetailsResponse withReportWebinarDetails200ApplicationJsonObject(ReportWebinarDetails200ApplicationJson reportWebinarDetails200ApplicationJSONObject) {
        this.reportWebinarDetails200ApplicationJSONObject = reportWebinarDetails200ApplicationJSONObject;
        return this;
    }
}