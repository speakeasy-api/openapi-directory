package openapisdk.models.operations;



public class ReportDailyResponse {
    public byte[] body;
    public ReportDailyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReportDailyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportDailyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object reportDaily200ApplicationJSONAny;
    public ReportDailyResponse withReportDaily200ApplicationJsonAny(Object reportDaily200ApplicationJSONAny) {
        this.reportDaily200ApplicationJSONAny = reportDaily200ApplicationJSONAny;
        return this;
    }
}