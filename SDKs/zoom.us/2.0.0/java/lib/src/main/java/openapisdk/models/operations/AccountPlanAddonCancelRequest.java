package openapisdk.models.operations;



public class AccountPlanAddonCancelRequest {
    public AccountPlanAddonCancelPathParams pathParams;
    public AccountPlanAddonCancelRequest withPathParams(AccountPlanAddonCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountPlanAddonCancelRequests request;
    public AccountPlanAddonCancelRequest withRequest(AccountPlanAddonCancelRequests request) {
        this.request = request;
        return this;
    }
    public AccountPlanAddonCancelSecurity security;
    public AccountPlanAddonCancelRequest withSecurity(AccountPlanAddonCancelSecurity security) {
        this.security = security;
        return this;
    }
}