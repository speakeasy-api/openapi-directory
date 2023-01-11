package openapisdk.models.operations;



public class AssignCallingPlanRequest {
    public AssignCallingPlanPathParams pathParams;
    public AssignCallingPlanRequest withPathParams(AssignCallingPlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssignCallingPlanRequests request;
    public AssignCallingPlanRequest withRequest(AssignCallingPlanRequests request) {
        this.request = request;
        return this;
    }
    public AssignCallingPlanSecurity security;
    public AssignCallingPlanRequest withSecurity(AssignCallingPlanSecurity security) {
        this.security = security;
        return this;
    }
}