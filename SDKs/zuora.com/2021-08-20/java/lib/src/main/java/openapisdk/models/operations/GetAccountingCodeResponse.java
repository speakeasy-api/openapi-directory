package openapisdk.models.operations;



public class GetAccountingCodeResponse {
    public String contentType;
    public GetAccountingCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getAccountingCodeItemType;
    public GetAccountingCodeResponse withGetAccountingCodeItemType(java.util.Map<String, Object> getAccountingCodeItemType) {
        this.getAccountingCodeItemType = getAccountingCodeItemType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAccountingCodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAccountingCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}