package openapisdk.models.operations;



public class FileDeleteFromComputeNodeResponse {
    public Object batchError;
    public FileDeleteFromComputeNodeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileDeleteFromComputeNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileDeleteFromComputeNodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FileDeleteFromComputeNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}