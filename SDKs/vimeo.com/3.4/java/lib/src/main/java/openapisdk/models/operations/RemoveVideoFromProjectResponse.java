package openapisdk.models.operations;



public class RemoveVideoFromProjectResponse {
    public String contentType;
    public RemoveVideoFromProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveVideoFromProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RemoveVideoFromProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}