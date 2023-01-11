package openapisdk.models.operations;



public class PostCreditMemoPdfResponse {
    public String contentType;
    public PostCreditMemoPdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreditMemoPdfResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostMemoPdfResponse postMemoPdfResponse;
    public PostCreditMemoPdfResponse withPostMemoPdfResponse(openapisdk.models.shared.PostMemoPdfResponse postMemoPdfResponse) {
        this.postMemoPdfResponse = postMemoPdfResponse;
        return this;
    }
    public Long statusCode;
    public PostCreditMemoPdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}