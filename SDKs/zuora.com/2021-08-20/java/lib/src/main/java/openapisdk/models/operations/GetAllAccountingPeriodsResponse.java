package openapisdk.models.operations;



public class GetAllAccountingPeriodsResponse {
    public String contentType;
    public GetAllAccountingPeriodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountingPeriodsType getAccountingPeriodsType;
    public GetAllAccountingPeriodsResponse withGetAccountingPeriodsType(openapisdk.models.shared.GetAccountingPeriodsType getAccountingPeriodsType) {
        this.getAccountingPeriodsType = getAccountingPeriodsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllAccountingPeriodsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllAccountingPeriodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}