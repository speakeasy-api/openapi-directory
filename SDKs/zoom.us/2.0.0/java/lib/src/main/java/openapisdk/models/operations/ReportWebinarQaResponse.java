package openapisdk.models.operations;



public class ReportWebinarQaResponse {
    public byte[] body;
    public ReportWebinarQaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportWebinarQaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportWebinarQaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportWebinarQa200ApplicationJson reportWebinarQA200ApplicationJSONObject;
    public ReportWebinarQaResponse withReportWebinarQa200ApplicationJsonObject(ReportWebinarQa200ApplicationJson reportWebinarQA200ApplicationJSONObject) {
        this.reportWebinarQA200ApplicationJSONObject = reportWebinarQA200ApplicationJSONObject;
        return this;
    }
}