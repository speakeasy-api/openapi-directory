package openapisdk.models.operations;



public class PutCancelDebitMemoResponse {
    public String contentType;
    public PutCancelDebitMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoType;
    public PutCancelDebitMemoResponse withGetDebitMemoType(java.util.Map<String, Object> getDebitMemoType) {
        this.getDebitMemoType = getDebitMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCancelDebitMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCancelDebitMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}