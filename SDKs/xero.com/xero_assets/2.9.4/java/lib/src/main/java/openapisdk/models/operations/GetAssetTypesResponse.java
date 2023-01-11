package openapisdk.models.operations;



public class GetAssetTypesResponse {
    public openapisdk.models.shared.AssetType[] assetTypes;
    public GetAssetTypesResponse withAssetTypes(openapisdk.models.shared.AssetType[] assetTypes) {
        this.assetTypes = assetTypes;
        return this;
    }
    public String contentType;
    public GetAssetTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}