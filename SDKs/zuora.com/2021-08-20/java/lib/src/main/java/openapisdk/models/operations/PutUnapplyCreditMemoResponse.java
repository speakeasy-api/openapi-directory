package openapisdk.models.operations;



public class PutUnapplyCreditMemoResponse {
    public String contentType;
    public PutUnapplyCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoType;
    public PutUnapplyCreditMemoResponse withGetCreditMemoType(java.util.Map<String, Object> getCreditMemoType) {
        this.getCreditMemoType = getCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUnapplyCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUnapplyCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}