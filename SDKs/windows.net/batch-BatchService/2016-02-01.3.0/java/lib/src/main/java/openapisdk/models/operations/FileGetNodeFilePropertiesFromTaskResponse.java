package openapisdk.models.operations;



public class FileGetNodeFilePropertiesFromTaskResponse {
    public Object batchError;
    public FileGetNodeFilePropertiesFromTaskResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileGetNodeFilePropertiesFromTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileGetNodeFilePropertiesFromTaskResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FileGetNodeFilePropertiesFromTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}