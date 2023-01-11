package openapisdk.models.operations;



public class CreateAssetTypeResponse {
    public openapisdk.models.shared.AssetType assetType;
    public CreateAssetTypeResponse withAssetType(openapisdk.models.shared.AssetType assetType) {
        this.assetType = assetType;
        return this;
    }
    public String contentType;
    public CreateAssetTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAssetTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}