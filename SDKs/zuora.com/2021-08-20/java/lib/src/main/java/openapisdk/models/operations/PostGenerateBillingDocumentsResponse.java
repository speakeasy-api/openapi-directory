package openapisdk.models.operations;



public class PostGenerateBillingDocumentsResponse {
    public String contentType;
    public PostGenerateBillingDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateBillingDocumentResponseType generateBillingDocumentResponseType;
    public PostGenerateBillingDocumentsResponse withGenerateBillingDocumentResponseType(openapisdk.models.shared.GenerateBillingDocumentResponseType generateBillingDocumentResponseType) {
        this.generateBillingDocumentResponseType = generateBillingDocumentResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostGenerateBillingDocumentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostGenerateBillingDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}