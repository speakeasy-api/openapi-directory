package openapisdk.models.operations;



public class PostTransactionInvoicePaymentResponse {
    public String contentType;
    public PostTransactionInvoicePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostTransactionInvoicePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostInvoiceCollectResponseType postInvoiceCollectResponseType;
    public PostTransactionInvoicePaymentResponse withPostInvoiceCollectResponseType(openapisdk.models.shared.PostInvoiceCollectResponseType postInvoiceCollectResponseType) {
        this.postInvoiceCollectResponseType = postInvoiceCollectResponseType;
        return this;
    }
    public Long statusCode;
    public PostTransactionInvoicePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}