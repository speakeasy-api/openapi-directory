package openapisdk.models.operations;



public class PutUnpostDebitMemoResponse {
    public String contentType;
    public PutUnpostDebitMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoType;
    public PutUnpostDebitMemoResponse withGetDebitMemoType(java.util.Map<String, Object> getDebitMemoType) {
        this.getDebitMemoType = getDebitMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUnpostDebitMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUnpostDebitMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}