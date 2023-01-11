package openapisdk.models.operations;



public class GetAllPaymentsRequest {
    public GetAllPaymentsQueryParams queryParams;
    public GetAllPaymentsRequest withQueryParams(GetAllPaymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllPaymentsHeaders headers;
    public GetAllPaymentsRequest withHeaders(GetAllPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllPaymentsSecurity security;
    public GetAllPaymentsRequest withSecurity(GetAllPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}