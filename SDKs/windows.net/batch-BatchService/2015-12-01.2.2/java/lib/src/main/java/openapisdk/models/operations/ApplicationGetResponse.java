package openapisdk.models.operations;



public class ApplicationGetResponse {
    public Object applicationSummary;
    public ApplicationGetResponse withApplicationSummary(Object applicationSummary) {
        this.applicationSummary = applicationSummary;
        return this;
    }
    public Object batchError;
    public ApplicationGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public ApplicationGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ApplicationGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ApplicationGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}