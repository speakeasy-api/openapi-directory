package openapisdk.models.operations;



public class PutReverseInvoiceResponse {
    public String contentType;
    public PutReverseInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutReverseInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutReverseInvoiceResponseType putReverseInvoiceResponseType;
    public PutReverseInvoiceResponse withPutReverseInvoiceResponseType(openapisdk.models.shared.PutReverseInvoiceResponseType putReverseInvoiceResponseType) {
        this.putReverseInvoiceResponseType = putReverseInvoiceResponseType;
        return this;
    }
    public Long statusCode;
    public PutReverseInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}