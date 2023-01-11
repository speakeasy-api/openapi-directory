package openapisdk.models.operations;



public class GetPublicEncryptionKeyResponse {
    public openapisdk.models.shared.ConfigsPublicKeyResponse configsPublicKeyResponse;
    public GetPublicEncryptionKeyResponse withConfigsPublicKeyResponse(openapisdk.models.shared.ConfigsPublicKeyResponse configsPublicKeyResponse) {
        this.configsPublicKeyResponse = configsPublicKeyResponse;
        return this;
    }
    public String contentType;
    public GetPublicEncryptionKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPublicEncryptionKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}