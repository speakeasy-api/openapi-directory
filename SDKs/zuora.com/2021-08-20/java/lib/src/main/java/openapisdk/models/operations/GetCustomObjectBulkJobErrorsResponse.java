package openapisdk.models.operations;



public class GetCustomObjectBulkJobErrorsResponse {
    public openapisdk.models.shared.CommonErrorResponse commonErrorResponse;
    public GetCustomObjectBulkJobErrorsResponse withCommonErrorResponse(openapisdk.models.shared.CommonErrorResponse commonErrorResponse) {
        this.commonErrorResponse = commonErrorResponse;
        return this;
    }
    public String contentType;
    public GetCustomObjectBulkJobErrorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectBulkJobErrorResponseCollection customObjectBulkJobErrorResponseCollection;
    public GetCustomObjectBulkJobErrorsResponse withCustomObjectBulkJobErrorResponseCollection(openapisdk.models.shared.CustomObjectBulkJobErrorResponseCollection customObjectBulkJobErrorResponseCollection) {
        this.customObjectBulkJobErrorResponseCollection = customObjectBulkJobErrorResponseCollection;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomObjectBulkJobErrorsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomObjectBulkJobErrorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}