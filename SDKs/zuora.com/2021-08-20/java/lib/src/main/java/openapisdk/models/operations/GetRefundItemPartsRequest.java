package openapisdk.models.operations;



public class GetRefundItemPartsRequest {
    public GetRefundItemPartsPathParams pathParams;
    public GetRefundItemPartsRequest withPathParams(GetRefundItemPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRefundItemPartsQueryParams queryParams;
    public GetRefundItemPartsRequest withQueryParams(GetRefundItemPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRefundItemPartsHeaders headers;
    public GetRefundItemPartsRequest withHeaders(GetRefundItemPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}