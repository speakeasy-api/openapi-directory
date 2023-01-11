package openapisdk.models.operations;



public class PostAccountingCodeResponse {
    public String contentType;
    public PostAccountingCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAccountingCodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostAccountingCodeResponseType postAccountingCodeResponseType;
    public PostAccountingCodeResponse withPostAccountingCodeResponseType(openapisdk.models.shared.PostAccountingCodeResponseType postAccountingCodeResponseType) {
        this.postAccountingCodeResponseType = postAccountingCodeResponseType;
        return this;
    }
    public Long statusCode;
    public PostAccountingCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}