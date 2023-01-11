package openapisdk.models.operations;



public class PostDebitMemoPdfResponse {
    public String contentType;
    public PostDebitMemoPdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDebitMemoPdfResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostMemoPdfResponse postMemoPdfResponse;
    public PostDebitMemoPdfResponse withPostMemoPdfResponse(openapisdk.models.shared.PostMemoPdfResponse postMemoPdfResponse) {
        this.postMemoPdfResponse = postMemoPdfResponse;
        return this;
    }
    public Long statusCode;
    public PostDebitMemoPdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}