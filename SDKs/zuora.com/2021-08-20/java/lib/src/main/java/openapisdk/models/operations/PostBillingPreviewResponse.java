package openapisdk.models.operations;



public class PostBillingPreviewResponse {
    public openapisdk.models.shared.BillingPreviewResult billingPreviewResult;
    public PostBillingPreviewResponse withBillingPreviewResult(openapisdk.models.shared.BillingPreviewResult billingPreviewResult) {
        this.billingPreviewResult = billingPreviewResult;
        return this;
    }
    public String contentType;
    public PostBillingPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostBillingPreviewResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostBillingPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}