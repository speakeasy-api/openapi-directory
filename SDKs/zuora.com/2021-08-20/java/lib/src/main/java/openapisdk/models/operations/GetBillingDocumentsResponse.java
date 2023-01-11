package openapisdk.models.operations;



public class GetBillingDocumentsResponse {
    public openapisdk.models.shared.BillingDocumentQueryResponseElementType billingDocumentQueryResponseElementType;
    public GetBillingDocumentsResponse withBillingDocumentQueryResponseElementType(openapisdk.models.shared.BillingDocumentQueryResponseElementType billingDocumentQueryResponseElementType) {
        this.billingDocumentQueryResponseElementType = billingDocumentQueryResponseElementType;
        return this;
    }
    public String contentType;
    public GetBillingDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBillingDocumentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBillingDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}