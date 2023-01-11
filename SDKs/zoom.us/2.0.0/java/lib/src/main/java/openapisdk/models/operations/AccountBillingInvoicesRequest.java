package openapisdk.models.operations;



public class AccountBillingInvoicesRequest {
    public AccountBillingInvoicesPathParams pathParams;
    public AccountBillingInvoicesRequest withPathParams(AccountBillingInvoicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountBillingInvoicesQueryParams queryParams;
    public AccountBillingInvoicesRequest withQueryParams(AccountBillingInvoicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}