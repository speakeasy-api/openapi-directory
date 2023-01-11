package openapisdk.models.operations;



public class MeetingDeleteRequest {
    public MeetingDeletePathParams pathParams;
    public MeetingDeleteRequest withPathParams(MeetingDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingDeleteQueryParams queryParams;
    public MeetingDeleteRequest withQueryParams(MeetingDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingDeleteSecurity security;
    public MeetingDeleteRequest withSecurity(MeetingDeleteSecurity security) {
        this.security = security;
        return this;
    }
}