package openapisdk.models.operations;



public class TrackingfieldUpdateRequest {
    public TrackingfieldUpdatePathParams pathParams;
    public TrackingfieldUpdateRequest withPathParams(TrackingfieldUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TrackingfieldUpdateRequests request;
    public TrackingfieldUpdateRequest withRequest(TrackingfieldUpdateRequests request) {
        this.request = request;
        return this;
    }
    public TrackingfieldUpdateSecurity security;
    public TrackingfieldUpdateRequest withSecurity(TrackingfieldUpdateSecurity security) {
        this.security = security;
        return this;
    }
}