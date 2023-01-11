package openapisdk.models.operations;



public class GetAssetByIdResponse {
    public openapisdk.models.shared.Asset asset;
    public GetAssetByIdResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public GetAssetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}