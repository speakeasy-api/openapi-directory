package openapisdk.models.operations;



public class CobrandLoginResponse {
    public openapisdk.models.shared.CobrandLoginResponse cobrandLoginResponse;
    public CobrandLoginResponse withCobrandLoginResponse(openapisdk.models.shared.CobrandLoginResponse cobrandLoginResponse) {
        this.cobrandLoginResponse = cobrandLoginResponse;
        return this;
    }
    public String contentType;
    public CobrandLoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CobrandLoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public CobrandLoginResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}