package openapisdk.models.operations;



public class GetPaymentItemPartsRequest {
    public GetPaymentItemPartsPathParams pathParams;
    public GetPaymentItemPartsRequest withPathParams(GetPaymentItemPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentItemPartsQueryParams queryParams;
    public GetPaymentItemPartsRequest withQueryParams(GetPaymentItemPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentItemPartsHeaders headers;
    public GetPaymentItemPartsRequest withHeaders(GetPaymentItemPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}