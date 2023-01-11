package openapisdk.models.operations;



public class MeetingPollsRequest {
    public MeetingPollsPathParams pathParams;
    public MeetingPollsRequest withPathParams(MeetingPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingPollsSecurity security;
    public MeetingPollsRequest withSecurity(MeetingPollsSecurity security) {
        this.security = security;
        return this;
    }
}