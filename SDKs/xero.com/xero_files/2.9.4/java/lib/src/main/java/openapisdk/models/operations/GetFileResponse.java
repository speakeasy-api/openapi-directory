package openapisdk.models.operations;



public class GetFileResponse {
    public String contentType;
    public GetFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileObject fileObject;
    public GetFileResponse withFileObject(openapisdk.models.shared.FileObject fileObject) {
        this.fileObject = fileObject;
        return this;
    }
    public Long statusCode;
    public GetFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}