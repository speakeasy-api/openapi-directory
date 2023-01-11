package openapisdk.models.operations;



public class GetAccountSummaryResponse {
    public String contentType;
    public GetAccountSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountSummaryType getAccountSummaryType;
    public GetAccountSummaryResponse withGetAccountSummaryType(openapisdk.models.shared.GetAccountSummaryType getAccountSummaryType) {
        this.getAccountSummaryType = getAccountSummaryType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAccountSummaryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAccountSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}