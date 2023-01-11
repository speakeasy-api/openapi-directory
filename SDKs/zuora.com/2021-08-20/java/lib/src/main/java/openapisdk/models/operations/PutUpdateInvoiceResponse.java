package openapisdk.models.operations;



public class PutUpdateInvoiceResponse {
    public String contentType;
    public PutUpdateInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public java.util.Map<String, Object> putInvoiceResponseType;
    public PutUpdateInvoiceResponse withPutInvoiceResponseType(java.util.Map<String, Object> putInvoiceResponseType) {
        this.putInvoiceResponseType = putInvoiceResponseType;
        return this;
    }
    public Long statusCode;
    public PutUpdateInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}