package openapisdk.models.operations;



public class GetAssetClassificationListResponse {
    public String contentType;
    public GetAssetClassificationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HoldingAssetClassificationListResponse holdingAssetClassificationListResponse;
    public GetAssetClassificationListResponse withHoldingAssetClassificationListResponse(openapisdk.models.shared.HoldingAssetClassificationListResponse holdingAssetClassificationListResponse) {
        this.holdingAssetClassificationListResponse = holdingAssetClassificationListResponse;
        return this;
    }
    public Long statusCode;
    public GetAssetClassificationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}