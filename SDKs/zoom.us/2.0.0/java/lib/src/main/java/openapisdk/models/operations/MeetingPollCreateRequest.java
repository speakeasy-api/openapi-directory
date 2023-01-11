package openapisdk.models.operations;



public class MeetingPollCreateRequest {
    public MeetingPollCreatePathParams pathParams;
    public MeetingPollCreateRequest withPathParams(MeetingPollCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingPollCreateRequests request;
    public MeetingPollCreateRequest withRequest(MeetingPollCreateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingPollCreateSecurity security;
    public MeetingPollCreateRequest withSecurity(MeetingPollCreateSecurity security) {
        this.security = security;
        return this;
    }
}