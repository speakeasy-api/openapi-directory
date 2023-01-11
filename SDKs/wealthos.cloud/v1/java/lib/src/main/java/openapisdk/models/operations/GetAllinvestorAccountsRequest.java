package openapisdk.models.operations;



public class GetAllinvestorAccountsRequest {
    public GetAllinvestorAccountsQueryParams queryParams;
    public GetAllinvestorAccountsRequest withQueryParams(GetAllinvestorAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllinvestorAccountsHeaders headers;
    public GetAllinvestorAccountsRequest withHeaders(GetAllinvestorAccountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllinvestorAccountsSecurity security;
    public GetAllinvestorAccountsRequest withSecurity(GetAllinvestorAccountsSecurity security) {
        this.security = security;
        return this;
    }
}