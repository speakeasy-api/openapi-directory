package openapisdk.models.operations;



public class GetFolderResponse {
    public String contentType;
    public GetFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object folder;
    public GetFolderResponse withFolder(Object folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public GetFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}