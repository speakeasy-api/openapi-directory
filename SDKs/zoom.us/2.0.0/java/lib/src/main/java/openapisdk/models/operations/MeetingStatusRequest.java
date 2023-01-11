package openapisdk.models.operations;



public class MeetingStatusRequest {
    public MeetingStatusPathParams pathParams;
    public MeetingStatusRequest withPathParams(MeetingStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingStatusRequests request;
    public MeetingStatusRequest withRequest(MeetingStatusRequests request) {
        this.request = request;
        return this;
    }
    public MeetingStatusSecurity security;
    public MeetingStatusRequest withSecurity(MeetingStatusSecurity security) {
        this.security = security;
        return this;
    }
}