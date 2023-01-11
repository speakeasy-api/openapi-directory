package openapisdk.models.operations;



public class UploadFileResponse {
    public String contentType;
    public UploadFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileObject fileObject;
    public UploadFileResponse withFileObject(openapisdk.models.shared.FileObject fileObject) {
        this.fileObject = fileObject;
        return this;
    }
    public Long statusCode;
    public UploadFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}