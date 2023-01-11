package openapisdk.models.operations;



public class PostCreditMemoFromPrpcResponse {
    public String contentType;
    public PostCreditMemoFromPrpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoType;
    public PostCreditMemoFromPrpcResponse withGetCreditMemoType(java.util.Map<String, Object> getCreditMemoType) {
        this.getCreditMemoType = getCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreditMemoFromPrpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCreditMemoFromPrpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}