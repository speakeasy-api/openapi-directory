package openapisdk.models.operations;



public class AssignSipConfigRequest {
    public AssignSipConfigPathParams pathParams;
    public AssignSipConfigRequest withPathParams(AssignSipConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssignSipConfigRequests request;
    public AssignSipConfigRequest withRequest(AssignSipConfigRequests request) {
        this.request = request;
        return this;
    }
    public AssignSipConfigSecurity security;
    public AssignSipConfigRequest withSecurity(AssignSipConfigSecurity security) {
        this.security = security;
        return this;
    }
}