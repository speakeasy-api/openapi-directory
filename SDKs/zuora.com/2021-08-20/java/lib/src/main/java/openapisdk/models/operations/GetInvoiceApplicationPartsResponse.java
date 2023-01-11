package openapisdk.models.operations;



public class GetInvoiceApplicationPartsResponse {
    public String contentType;
    public GetInvoiceApplicationPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvoiceApplicationPartCollectionType getInvoiceApplicationPartCollectionType;
    public GetInvoiceApplicationPartsResponse withGetInvoiceApplicationPartCollectionType(openapisdk.models.shared.GetInvoiceApplicationPartCollectionType getInvoiceApplicationPartCollectionType) {
        this.getInvoiceApplicationPartCollectionType = getInvoiceApplicationPartCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoiceApplicationPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoiceApplicationPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}