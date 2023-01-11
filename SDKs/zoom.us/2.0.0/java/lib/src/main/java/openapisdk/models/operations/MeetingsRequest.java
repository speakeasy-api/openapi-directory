package openapisdk.models.operations;



public class MeetingsRequest {
    public MeetingsPathParams pathParams;
    public MeetingsRequest withPathParams(MeetingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingsQueryParams queryParams;
    public MeetingsRequest withQueryParams(MeetingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingsSecurity security;
    public MeetingsRequest withSecurity(MeetingsSecurity security) {
        this.security = security;
        return this;
    }
}