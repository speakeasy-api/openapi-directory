package openapisdk.models.operations;



public class RemoveVideosFromProjectResponse {
    public String contentType;
    public RemoveVideosFromProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveVideosFromProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RemoveVideosFromProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}