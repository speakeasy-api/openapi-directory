package openapisdk.models.operations;



public class JobListResponse {
    public Object batchError;
    public JobListResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJobListResult;
    public JobListResponse withCloudJobListResult(Object cloudJobListResult) {
        this.cloudJobListResult = cloudJobListResult;
        return this;
    }
    public String contentType;
    public JobListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}