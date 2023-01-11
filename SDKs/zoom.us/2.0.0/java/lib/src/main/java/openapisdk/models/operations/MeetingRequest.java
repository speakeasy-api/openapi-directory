package openapisdk.models.operations;



public class MeetingRequest {
    public MeetingPathParams pathParams;
    public MeetingRequest withPathParams(MeetingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingQueryParams queryParams;
    public MeetingRequest withQueryParams(MeetingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingSecurity security;
    public MeetingRequest withSecurity(MeetingSecurity security) {
        this.security = security;
        return this;
    }
}