package openapisdk.models.operations;



public class GetInboxResponse {
    public String contentType;
    public GetInboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object folder;
    public GetInboxResponse withFolder(Object folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public GetInboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}