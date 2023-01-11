package openapisdk.models.operations;



public class GetVersionResponse {
    public String contentType;
    public GetVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionResponse versionResponse;
    public GetVersionResponse withVersionResponse(openapisdk.models.shared.VersionResponse versionResponse) {
        this.versionResponse = versionResponse;
        return this;
    }
}