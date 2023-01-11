package openapisdk.models.operations;



public class ReportTelephoneResponse {
    public byte[] body;
    public ReportTelephoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportTelephoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportTelephoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReportTelephone200ApplicationJson reportTelephone200ApplicationJSONObject;
    public ReportTelephoneResponse withReportTelephone200ApplicationJsonObject(ReportTelephone200ApplicationJson reportTelephone200ApplicationJSONObject) {
        this.reportTelephone200ApplicationJSONObject = reportTelephone200ApplicationJSONObject;
        return this;
    }
}