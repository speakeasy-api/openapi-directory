package openapisdk.models.operations;



public class GetCustomObjectBulkJobResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public GetCustomObjectBulkJobResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public GetCustomObjectBulkJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse;
    public GetCustomObjectBulkJobResponse withCustomObjectBulkJobResponse(openapisdk.models.shared.CustomObjectBulkJobResponse customObjectBulkJobResponse) {
        this.customObjectBulkJobResponse = customObjectBulkJobResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomObjectBulkJobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomObjectBulkJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}