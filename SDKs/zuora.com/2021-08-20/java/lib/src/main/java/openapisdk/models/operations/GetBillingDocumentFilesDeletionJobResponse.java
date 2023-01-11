package openapisdk.models.operations;



public class GetBillingDocumentFilesDeletionJobResponse {
    public String contentType;
    public GetBillingDocumentFilesDeletionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBillingDocumentFilesDeletionJobResponse getBillingDocumentFilesDeletionJobResponse;
    public GetBillingDocumentFilesDeletionJobResponse withGetBillingDocumentFilesDeletionJobResponse(openapisdk.models.shared.GetBillingDocumentFilesDeletionJobResponse getBillingDocumentFilesDeletionJobResponse) {
        this.getBillingDocumentFilesDeletionJobResponse = getBillingDocumentFilesDeletionJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBillingDocumentFilesDeletionJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBillingDocumentFilesDeletionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}