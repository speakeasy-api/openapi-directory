package openapisdk.models.operations;



public class PutUpdateCreditMemoResponse {
    public String contentType;
    public PutUpdateCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoType;
    public PutUpdateCreditMemoResponse withGetCreditMemoType(java.util.Map<String, Object> getCreditMemoType) {
        this.getCreditMemoType = getCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}