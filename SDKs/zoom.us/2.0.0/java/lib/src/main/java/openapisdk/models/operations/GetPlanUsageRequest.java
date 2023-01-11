package openapisdk.models.operations;



public class GetPlanUsageRequest {
    public GetPlanUsagePathParams pathParams;
    public GetPlanUsageRequest withPathParams(GetPlanUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPlanUsageSecurity security;
    public GetPlanUsageRequest withSecurity(GetPlanUsageSecurity security) {
        this.security = security;
        return this;
    }
}