package openapisdk.models.operations;



public class TrackingfieldGetRequest {
    public TrackingfieldGetPathParams pathParams;
    public TrackingfieldGetRequest withPathParams(TrackingfieldGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TrackingfieldGetSecurity security;
    public TrackingfieldGetRequest withSecurity(TrackingfieldGetSecurity security) {
        this.security = security;
        return this;
    }
}