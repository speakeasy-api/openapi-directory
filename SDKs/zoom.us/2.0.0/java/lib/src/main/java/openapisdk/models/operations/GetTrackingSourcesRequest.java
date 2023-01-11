package openapisdk.models.operations;



public class GetTrackingSourcesRequest {
    public GetTrackingSourcesPathParams pathParams;
    public GetTrackingSourcesRequest withPathParams(GetTrackingSourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrackingSourcesSecurity security;
    public GetTrackingSourcesRequest withSecurity(GetTrackingSourcesSecurity security) {
        this.security = security;
        return this;
    }
}