package openapisdk.models.operations;



public class FileListFromComputeNodeResponse {
    public Object batchError;
    public FileListFromComputeNodeResponse withBatchError(Object batchError) {
        this.batchError = batchError;
        return this;
    }
    public String contentType;
    public FileListFromComputeNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FileListFromComputeNodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object nodeFileListResult;
    public FileListFromComputeNodeResponse withNodeFileListResult(Object nodeFileListResult) {
        this.nodeFileListResult = nodeFileListResult;
        return this;
    }
    public Long statusCode;
    public FileListFromComputeNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}