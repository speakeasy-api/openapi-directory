package openapisdk.models.operations;



public class GetFoldersResponse {
    public String contentType;
    public GetFoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] folders;
    public GetFoldersResponse withFolders(Object[] folders) {
        this.folders = folders;
        return this;
    }
    public Long statusCode;
    public GetFoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}