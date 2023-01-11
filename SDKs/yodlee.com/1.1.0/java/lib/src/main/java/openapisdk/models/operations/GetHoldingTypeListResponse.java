package openapisdk.models.operations;



public class GetHoldingTypeListResponse {
    public String contentType;
    public GetHoldingTypeListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HoldingTypeListResponse holdingTypeListResponse;
    public GetHoldingTypeListResponse withHoldingTypeListResponse(openapisdk.models.shared.HoldingTypeListResponse holdingTypeListResponse) {
        this.holdingTypeListResponse = holdingTypeListResponse;
        return this;
    }
    public Long statusCode;
    public GetHoldingTypeListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}