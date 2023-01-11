package openapisdk.models.operations;



public class GetInvestorRequest {
    public GetInvestorPathParams pathParams;
    public GetInvestorRequest withPathParams(GetInvestorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInvestorHeaders headers;
    public GetInvestorRequest withHeaders(GetInvestorHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetInvestorSecurity security;
    public GetInvestorRequest withSecurity(GetInvestorSecurity security) {
        this.security = security;
        return this;
    }
}