package openapisdk.models.operations;



public class GetAllAccountingCodesResponse {
    public String contentType;
    public GetAllAccountingCodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountingCodesType getAccountingCodesType;
    public GetAllAccountingCodesResponse withGetAccountingCodesType(openapisdk.models.shared.GetAccountingCodesType getAccountingCodesType) {
        this.getAccountingCodesType = getAccountingCodesType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllAccountingCodesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllAccountingCodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}