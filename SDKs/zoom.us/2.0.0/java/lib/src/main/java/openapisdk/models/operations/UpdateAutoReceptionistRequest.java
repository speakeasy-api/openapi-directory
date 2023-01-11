package openapisdk.models.operations;



public class UpdateAutoReceptionistRequest {
    public UpdateAutoReceptionistPathParams pathParams;
    public UpdateAutoReceptionistRequest withPathParams(UpdateAutoReceptionistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAutoReceptionistRequests request;
    public UpdateAutoReceptionistRequest withRequest(UpdateAutoReceptionistRequests request) {
        this.request = request;
        return this;
    }
    public UpdateAutoReceptionistSecurity security;
    public UpdateAutoReceptionistRequest withSecurity(UpdateAutoReceptionistSecurity security) {
        this.security = security;
        return this;
    }
}