package openapisdk.models.operations;



public class PostCustomObjectRecordsResponse {
    public String contentType;
    public PostCustomObjectRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectRecordsErrorResponse customObjectRecordsErrorResponse;
    public PostCustomObjectRecordsResponse withCustomObjectRecordsErrorResponse(openapisdk.models.shared.CustomObjectRecordsErrorResponse customObjectRecordsErrorResponse) {
        this.customObjectRecordsErrorResponse = customObjectRecordsErrorResponse;
        return this;
    }
    public openapisdk.models.shared.CustomObjectRecordsThrottledResponse customObjectRecordsThrottledResponse;
    public PostCustomObjectRecordsResponse withCustomObjectRecordsThrottledResponse(openapisdk.models.shared.CustomObjectRecordsThrottledResponse customObjectRecordsThrottledResponse) {
        this.customObjectRecordsThrottledResponse = customObjectRecordsThrottledResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse401Record errorResponse401Record;
    public PostCustomObjectRecordsResponse withErrorResponse401Record(openapisdk.models.shared.ErrorResponse401Record errorResponse401Record) {
        this.errorResponse401Record = errorResponse401Record;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCustomObjectRecordsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostCustomObjectRecordsResponse postCustomObjectRecordsResponse;
    public PostCustomObjectRecordsResponse withPostCustomObjectRecordsResponse(openapisdk.models.shared.PostCustomObjectRecordsResponse postCustomObjectRecordsResponse) {
        this.postCustomObjectRecordsResponse = postCustomObjectRecordsResponse;
        return this;
    }
    public Long statusCode;
    public PostCustomObjectRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}