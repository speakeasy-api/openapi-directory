package openapisdk.models.operations;



public class PostDebitMemoFromInvoiceResponse {
    public String contentType;
    public PostDebitMemoFromInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoType;
    public PostDebitMemoFromInvoiceResponse withGetDebitMemoType(java.util.Map<String, Object> getDebitMemoType) {
        this.getDebitMemoType = getDebitMemoType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDebitMemoFromInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDebitMemoFromInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}