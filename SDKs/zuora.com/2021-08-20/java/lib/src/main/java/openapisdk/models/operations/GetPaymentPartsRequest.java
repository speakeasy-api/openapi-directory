package openapisdk.models.operations;



public class GetPaymentPartsRequest {
    public GetPaymentPartsPathParams pathParams;
    public GetPaymentPartsRequest withPathParams(GetPaymentPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentPartsQueryParams queryParams;
    public GetPaymentPartsRequest withQueryParams(GetPaymentPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentPartsHeaders headers;
    public GetPaymentPartsRequest withHeaders(GetPaymentPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}