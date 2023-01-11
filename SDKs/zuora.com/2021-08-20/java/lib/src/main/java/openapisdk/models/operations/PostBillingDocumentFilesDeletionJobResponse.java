package openapisdk.models.operations;



public class PostBillingDocumentFilesDeletionJobResponse {
    public String contentType;
    public PostBillingDocumentFilesDeletionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostBillingDocumentFilesDeletionJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostBillingDocumentFilesDeletionJobResponse postBillingDocumentFilesDeletionJobResponse;
    public PostBillingDocumentFilesDeletionJobResponse withPostBillingDocumentFilesDeletionJobResponse(openapisdk.models.shared.PostBillingDocumentFilesDeletionJobResponse postBillingDocumentFilesDeletionJobResponse) {
        this.postBillingDocumentFilesDeletionJobResponse = postBillingDocumentFilesDeletionJobResponse;
        return this;
    }
    public Long statusCode;
    public PostBillingDocumentFilesDeletionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}