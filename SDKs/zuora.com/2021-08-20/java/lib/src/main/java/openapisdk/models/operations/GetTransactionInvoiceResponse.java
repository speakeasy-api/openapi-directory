package openapisdk.models.operations;



public class GetTransactionInvoiceResponse {
    public String contentType;
    public GetTransactionInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvoiceFileWrapper getInvoiceFileWrapper;
    public GetTransactionInvoiceResponse withGetInvoiceFileWrapper(openapisdk.models.shared.GetInvoiceFileWrapper getInvoiceFileWrapper) {
        this.getInvoiceFileWrapper = getInvoiceFileWrapper;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTransactionInvoiceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTransactionInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}