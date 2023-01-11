package openapisdk.models.operations;



public class CreateResponse {
    public openapisdk.models.shared.ApiError apiError;
    public CreateResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public CreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Token token;
    public CreateResponse withToken(openapisdk.models.shared.Token token) {
        this.token = token;
        return this;
    }
}