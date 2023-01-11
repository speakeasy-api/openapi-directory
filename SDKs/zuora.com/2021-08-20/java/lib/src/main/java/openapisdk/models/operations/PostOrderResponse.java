package openapisdk.models.operations;



public class PostOrderResponse {
    public String contentType;
    public PostOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostOrderResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostOrderResponseType postOrderResponseType;
    public PostOrderResponse withPostOrderResponseType(openapisdk.models.shared.PostOrderResponseType postOrderResponseType) {
        this.postOrderResponseType = postOrderResponseType;
        return this;
    }
    public Long statusCode;
    public PostOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}