package openapisdk.models.operations;



public class GetPotPaymentsRequest {
    public GetPotPaymentsPathParams pathParams;
    public GetPotPaymentsRequest withPathParams(GetPotPaymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPotPaymentsQueryParams queryParams;
    public GetPotPaymentsRequest withQueryParams(GetPotPaymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPotPaymentsHeaders headers;
    public GetPotPaymentsRequest withHeaders(GetPotPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPotPaymentsSecurity security;
    public GetPotPaymentsRequest withSecurity(GetPotPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}