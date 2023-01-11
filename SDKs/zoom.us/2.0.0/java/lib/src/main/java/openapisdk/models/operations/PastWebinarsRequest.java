package openapisdk.models.operations;



public class PastWebinarsRequest {
    public PastWebinarsPathParams pathParams;
    public PastWebinarsRequest withPathParams(PastWebinarsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PastWebinarsSecurity security;
    public PastWebinarsRequest withSecurity(PastWebinarsSecurity security) {
        this.security = security;
        return this;
    }
}