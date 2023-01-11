package openapisdk.models.operations;



public class GetPublicKeyResponse {
    public openapisdk.models.shared.CobrandPublicKeyResponse cobrandPublicKeyResponse;
    public GetPublicKeyResponse withCobrandPublicKeyResponse(openapisdk.models.shared.CobrandPublicKeyResponse cobrandPublicKeyResponse) {
        this.cobrandPublicKeyResponse = cobrandPublicKeyResponse;
        return this;
    }
    public String contentType;
    public GetPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}