package openapisdk.models.operations;



public class JobGetResponse {
    public Object batchError;
    public JobGetResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJob;
    public JobGetResponse withCloudJob(Object cloudJob) {
        this.cloudJob = cloudJob;
        return this;
    }
    public String contentType;
    public JobGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}