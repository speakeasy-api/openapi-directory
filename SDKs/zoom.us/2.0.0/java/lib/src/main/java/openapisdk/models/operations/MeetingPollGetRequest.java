package openapisdk.models.operations;



public class MeetingPollGetRequest {
    public MeetingPollGetPathParams pathParams;
    public MeetingPollGetRequest withPathParams(MeetingPollGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingPollGetSecurity security;
    public MeetingPollGetRequest withSecurity(MeetingPollGetSecurity security) {
        this.security = security;
        return this;
    }
}