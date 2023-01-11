package openapisdk.models.operations;



public class GetAccountResponse {
    public String contentType;
    public GetAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountType getAccountType;
    public GetAccountResponse withGetAccountType(openapisdk.models.shared.GetAccountType getAccountType) {
        this.getAccountType = getAccountType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}