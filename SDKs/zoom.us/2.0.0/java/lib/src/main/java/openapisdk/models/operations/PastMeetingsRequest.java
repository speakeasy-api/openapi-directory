package openapisdk.models.operations;



public class PastMeetingsRequest {
    public PastMeetingsPathParams pathParams;
    public PastMeetingsRequest withPathParams(PastMeetingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PastMeetingsSecurity security;
    public PastMeetingsRequest withSecurity(PastMeetingsSecurity security) {
        this.security = security;
        return this;
    }
}