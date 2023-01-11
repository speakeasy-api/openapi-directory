package openapisdk.models.operations;



public class UpdateFileResponse {
    public String contentType;
    public UpdateFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileObject fileObject;
    public UpdateFileResponse withFileObject(openapisdk.models.shared.FileObject fileObject) {
        this.fileObject = fileObject;
        return this;
    }
    public Long statusCode;
    public UpdateFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}