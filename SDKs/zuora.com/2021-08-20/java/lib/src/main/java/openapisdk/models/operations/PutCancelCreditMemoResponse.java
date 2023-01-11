package openapisdk.models.operations;



public class PutCancelCreditMemoResponse {
    public String contentType;
    public PutCancelCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoType;
    public PutCancelCreditMemoResponse withGetCreditMemoType(java.util.Map<String, Object> getCreditMemoType) {
        this.getCreditMemoType = getCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCancelCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCancelCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}