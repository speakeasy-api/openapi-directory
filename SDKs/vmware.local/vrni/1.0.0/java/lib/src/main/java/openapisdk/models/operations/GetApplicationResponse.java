package openapisdk.models.operations;



public class GetApplicationResponse {
    public openapisdk.models.shared.Application application;
    public GetApplicationResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public GetApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}