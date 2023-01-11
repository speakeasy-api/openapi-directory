package openapisdk.models.operations;



public class PostCustomObjectBulkJobResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public PostCustomObjectBulkJobResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public PostCustomObjectBulkJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse;
    public PostCustomObjectBulkJobResponse withCustomObjectBulkJobResponse(openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse) {
        this.customObjectBulkJobResponse = customObjectBulkJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCustomObjectBulkJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCustomObjectBulkJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}