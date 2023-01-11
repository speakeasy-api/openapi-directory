package openapisdk.models.operations;



public class GetAccountingPeriodResponse {
    public String contentType;
    public GetAccountingPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getAccountingPeriodType;
    public GetAccountingPeriodResponse withGetAccountingPeriodType(java.util.Map<String, Object> getAccountingPeriodType) {
        this.getAccountingPeriodType = getAccountingPeriodType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAccountingPeriodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAccountingPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}