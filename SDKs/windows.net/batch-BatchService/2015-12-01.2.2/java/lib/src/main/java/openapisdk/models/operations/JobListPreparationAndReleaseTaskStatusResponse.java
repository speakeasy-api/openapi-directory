package openapisdk.models.operations;



public class JobListPreparationAndReleaseTaskStatusResponse {
    public Object batchError;
    public JobListPreparationAndReleaseTaskStatusResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public Object cloudJobListPreparationAndReleaseTaskStatusResult;
    public JobListPreparationAndReleaseTaskStatusResponse withCloudJobListPreparationAndReleaseTaskStatusResult(Object cloudJobListPreparationAndReleaseTaskStatusResult) {
        this.cloudJobListPreparationAndReleaseTaskStatusResult = cloudJobListPreparationAndReleaseTaskStatusResult;
        return this;
    }
    public String contentType;
    public JobListPreparationAndReleaseTaskStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JobListPreparationAndReleaseTaskStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JobListPreparationAndReleaseTaskStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}