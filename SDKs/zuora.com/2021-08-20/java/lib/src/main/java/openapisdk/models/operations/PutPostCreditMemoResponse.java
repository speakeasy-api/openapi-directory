package openapisdk.models.operations;



public class PutPostCreditMemoResponse {
    public String contentType;
    public PutPostCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoType;
    public PutPostCreditMemoResponse withGetCreditMemoType(java.util.Map<String, Object> getCreditMemoType) {
        this.getCreditMemoType = getCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutPostCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutPostCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}