package openapisdk.models.operations;



public class PostUploadFileForCustomObjectBulkJobResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public PostUploadFileForCustomObjectBulkJobResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public PostUploadFileForCustomObjectBulkJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse;
    public PostUploadFileForCustomObjectBulkJobResponse withCustomObjectBulkJobResponse(openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse) {
        this.customObjectBulkJobResponse = customObjectBulkJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUploadFileForCustomObjectBulkJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostUploadFileForCustomObjectBulkJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}