package openapisdk.models.operations;



public class FileListFromTaskResponse {
    public Object batchError;
    public FileListFromTaskResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileListFromTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileListFromTaskResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object nodeFileListResult;
    public FileListFromTaskResponse withNodeFileListResult(Object nodeFileListResult) {
        this.nodeFileListResult = nodeFileListResult;
        return this;
    }
    public Long statusCode;
    public FileListFromTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}