package openapisdk.models.operations;



public class VerifyTokenResponse {
    public String contentType;
    public VerifyTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifyTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Auth auth;
    public VerifyTokenResponse withAuth(openapisdk.models.shared.Auth auth) {
        this.auth = auth;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public VerifyTokenResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}