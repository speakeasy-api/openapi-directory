package openapisdk.models.operations;



public class PostCustomObjectRecordsBatchUpdateOrDeleteResponse {
    public String contentType;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse customObjectRecordsBatchUpdatePartialSuccessResponse;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withCustomObjectRecordsBatchUpdatePartialSuccessResponse(openapisdk.models.shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse customObjectRecordsBatchUpdatePartialSuccessResponse) {
        this.customObjectRecordsBatchUpdatePartialSuccessResponse = customObjectRecordsBatchUpdatePartialSuccessResponse;
        return this;
    }
    public openapisdk.models.shared.CustomObjectRecordsErrorResponse customObjectRecordsErrorResponse;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withCustomObjectRecordsErrorResponse(openapisdk.models.shared.CustomObjectRecordsErrorResponse customObjectRecordsErrorResponse) {
        this.customObjectRecordsErrorResponse = customObjectRecordsErrorResponse;
        return this;
    }
    public openapisdk.models.shared.CustomObjectRecordsThrottledResponse customObjectRecordsThrottledResponse;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withCustomObjectRecordsThrottledResponse(openapisdk.models.shared.CustomObjectRecordsThrottledResponse customObjectRecordsThrottledResponse) {
        this.customObjectRecordsThrottledResponse = customObjectRecordsThrottledResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse401Record errorResponse401Record;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withErrorResponse401Record(openapisdk.models.shared.ErrorResponse401Record errorResponse401Record) {
        this.errorResponse401Record = errorResponse401Record;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCustomObjectRecordsBatchUpdateOrDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}