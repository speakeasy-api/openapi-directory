package openapisdk.models.operations;



public class GetSuperfundsRequest {
    public GetSuperfundsQueryParams queryParams;
    public GetSuperfundsRequest withQueryParams(GetSuperfundsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSuperfundsHeaders headers;
    public GetSuperfundsRequest withHeaders(GetSuperfundsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSuperfundsSecurity security;
    public GetSuperfundsRequest withSecurity(GetSuperfundsSecurity security) {
        this.security = security;
        return this;
    }
}