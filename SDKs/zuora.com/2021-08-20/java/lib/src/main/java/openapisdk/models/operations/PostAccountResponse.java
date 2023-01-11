package openapisdk.models.operations;



public class PostAccountResponse {
    public String contentType;
    public PostAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostAccountResponseType postAccountResponseType;
    public PostAccountResponse withPostAccountResponseType(openapisdk.models.shared.PostAccountResponseType postAccountResponseType) {
        this.postAccountResponseType = postAccountResponseType;
        return this;
    }
    public Long statusCode;
    public PostAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}