package openapisdk.models.operations;



public class TaskAddCollectionResponse {
    public Object batchError;
    public TaskAddCollectionResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public TaskAddCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TaskAddCollectionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TaskAddCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskAddCollectionResult;
    public TaskAddCollectionResponse withTaskAddCollectionResult(Object taskAddCollectionResult) {
        this.taskAddCollectionResult = taskAddCollectionResult;
        return this;
    }
}