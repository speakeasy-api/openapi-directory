package openapisdk.models.operations;



public class GetAllInvestorsRequest {
    public GetAllInvestorsQueryParams queryParams;
    public GetAllInvestorsRequest withQueryParams(GetAllInvestorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllInvestorsHeaders headers;
    public GetAllInvestorsRequest withHeaders(GetAllInvestorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllInvestorsSecurity security;
    public GetAllInvestorsRequest withSecurity(GetAllInvestorsSecurity security) {
        this.security = security;
        return this;
    }
}