package openapisdk.models.operations;



public class GetInvoiceFilesResponse {
    public String contentType;
    public GetInvoiceFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvoiceFilesResponse getInvoiceFilesResponse;
    public GetInvoiceFilesResponse withGetInvoiceFilesResponse(openapisdk.models.shared.GetInvoiceFilesResponse getInvoiceFilesResponse) {
        this.getInvoiceFilesResponse = getInvoiceFilesResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoiceFilesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoiceFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}