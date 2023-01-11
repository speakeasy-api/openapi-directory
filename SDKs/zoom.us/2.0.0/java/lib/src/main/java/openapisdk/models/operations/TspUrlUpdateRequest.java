package openapisdk.models.operations;



public class TspUrlUpdateRequest {
    public TspUrlUpdatePathParams pathParams;
    public TspUrlUpdateRequest withPathParams(TspUrlUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TspUrlUpdateRequests request;
    public TspUrlUpdateRequest withRequest(TspUrlUpdateRequests request) {
        this.request = request;
        return this;
    }
    public TspUrlUpdateSecurity security;
    public TspUrlUpdateRequest withSecurity(TspUrlUpdateSecurity security) {
        this.security = security;
        return this;
    }
}