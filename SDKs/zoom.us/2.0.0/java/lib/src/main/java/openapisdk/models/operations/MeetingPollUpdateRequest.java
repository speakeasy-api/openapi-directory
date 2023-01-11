package openapisdk.models.operations;



public class MeetingPollUpdateRequest {
    public MeetingPollUpdatePathParams pathParams;
    public MeetingPollUpdateRequest withPathParams(MeetingPollUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingPollUpdateRequests request;
    public MeetingPollUpdateRequest withRequest(MeetingPollUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingPollUpdateSecurity security;
    public MeetingPollUpdateRequest withSecurity(MeetingPollUpdateSecurity security) {
        this.security = security;
        return this;
    }
}