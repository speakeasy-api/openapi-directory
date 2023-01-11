package openapisdk.models.operations;



public class PutWriteOffInvoiceResponse {
    public String contentType;
    public PutWriteOffInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutWriteOffInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutWriteOffInvoiceResponse putWriteOffInvoiceResponse;
    public PutWriteOffInvoiceResponse withPutWriteOffInvoiceResponse(openapisdk.models.shared.PutWriteOffInvoiceResponse putWriteOffInvoiceResponse) {
        this.putWriteOffInvoiceResponse = putWriteOffInvoiceResponse;
        return this;
    }
    public Long statusCode;
    public PutWriteOffInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}