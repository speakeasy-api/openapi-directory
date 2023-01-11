package openapisdk.models.operations;



public class PostRefundCreditMemoResponse {
    public String contentType;
    public PostRefundCreditMemoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRefundCreditMemoType;
    public PostRefundCreditMemoResponse withGetRefundCreditMemoType(java.util.Map<String, Object> getRefundCreditMemoType) {
        this.getRefundCreditMemoType = getRefundCreditMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRefundCreditMemoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRefundCreditMemoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}