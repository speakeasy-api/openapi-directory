package openapisdk.models.operations;



public class CreateAssetResponse {
    public openapisdk.models.shared.Asset asset;
    public CreateAssetResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public CreateAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}