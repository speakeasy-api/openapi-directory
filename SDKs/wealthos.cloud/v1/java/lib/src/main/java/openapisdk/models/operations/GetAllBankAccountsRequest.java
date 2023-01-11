package openapisdk.models.operations;



public class GetAllBankAccountsRequest {
    public GetAllBankAccountsQueryParams queryParams;
    public GetAllBankAccountsRequest withQueryParams(GetAllBankAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllBankAccountsHeaders headers;
    public GetAllBankAccountsRequest withHeaders(GetAllBankAccountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllBankAccountsSecurity security;
    public GetAllBankAccountsRequest withSecurity(GetAllBankAccountsSecurity security) {
        this.security = security;
        return this;
    }
}