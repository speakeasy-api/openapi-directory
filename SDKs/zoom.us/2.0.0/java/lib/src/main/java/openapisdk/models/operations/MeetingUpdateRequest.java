package openapisdk.models.operations;



public class MeetingUpdateRequest {
    public MeetingUpdatePathParams pathParams;
    public MeetingUpdateRequest withPathParams(MeetingUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingUpdateQueryParams queryParams;
    public MeetingUpdateRequest withQueryParams(MeetingUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingUpdateRequests request;
    public MeetingUpdateRequest withRequest(MeetingUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingUpdateSecurity security;
    public MeetingUpdateRequest withSecurity(MeetingUpdateSecurity security) {
        this.security = security;
        return this;
    }
}