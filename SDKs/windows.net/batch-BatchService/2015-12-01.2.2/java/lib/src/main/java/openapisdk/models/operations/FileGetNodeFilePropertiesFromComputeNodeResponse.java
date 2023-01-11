package openapisdk.models.operations;



public class FileGetNodeFilePropertiesFromComputeNodeResponse {
    public Object batchError;
    public FileGetNodeFilePropertiesFromComputeNodeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileGetNodeFilePropertiesFromComputeNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileGetNodeFilePropertiesFromComputeNodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FileGetNodeFilePropertiesFromComputeNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}