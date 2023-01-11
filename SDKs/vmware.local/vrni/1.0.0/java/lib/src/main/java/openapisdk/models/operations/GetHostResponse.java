package openapisdk.models.operations;



public class GetHostResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetHostResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Host host;
    public GetHostResponse withHost(openapisdk.models.shared.Host host) {
        this.host = host;
        return this;
    }
    public Long statusCode;
    public GetHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}