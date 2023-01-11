package openapisdk.models.operations;



public class AddApplicationResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddApplicationResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.Application application;
    public AddApplicationResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public AddApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}