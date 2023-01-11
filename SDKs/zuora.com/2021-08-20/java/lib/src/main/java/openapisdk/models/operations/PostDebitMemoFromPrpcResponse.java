package openapisdk.models.operations;



public class PostDebitMemoFromPrpcResponse {
    public String contentType;
    public PostDebitMemoFromPrpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoType;
    public PostDebitMemoFromPrpcResponse withGetDebitMemoType(java.util.Map<String, Object> getDebitMemoType) {
        this.getDebitMemoType = getDebitMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDebitMemoFromPrpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDebitMemoFromPrpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}