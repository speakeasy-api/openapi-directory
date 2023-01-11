package openapisdk.models.operations;



public class UnassignCallingPlanRequest {
    public UnassignCallingPlanPathParams pathParams;
    public UnassignCallingPlanRequest withPathParams(UnassignCallingPlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnassignCallingPlanSecurity security;
    public UnassignCallingPlanRequest withSecurity(UnassignCallingPlanSecurity security) {
        this.security = security;
        return this;
    }
}