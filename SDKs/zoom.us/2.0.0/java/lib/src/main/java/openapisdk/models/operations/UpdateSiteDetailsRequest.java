package openapisdk.models.operations;



public class UpdateSiteDetailsRequest {
    public UpdateSiteDetailsPathParams pathParams;
    public UpdateSiteDetailsRequest withPathParams(UpdateSiteDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSiteDetailsRequests request;
    public UpdateSiteDetailsRequest withRequest(UpdateSiteDetailsRequests request) {
        this.request = request;
        return this;
    }
    public UpdateSiteDetailsSecurity security;
    public UpdateSiteDetailsRequest withSecurity(UpdateSiteDetailsSecurity security) {
        this.security = security;
        return this;
    }
}