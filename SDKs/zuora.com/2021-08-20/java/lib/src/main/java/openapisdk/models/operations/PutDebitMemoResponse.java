package openapisdk.models.operations;



public class PutDebitMemoResponse {
    public String contentType;
    public PutDebitMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoType;
    public PutDebitMemoResponse withGetDebitMemoType(java.util.Map<String, Object> getDebitMemoType) {
        this.getDebitMemoType = getDebitMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutDebitMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutDebitMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}