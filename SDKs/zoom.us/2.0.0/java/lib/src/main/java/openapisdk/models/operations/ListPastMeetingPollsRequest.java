package openapisdk.models.operations;



public class ListPastMeetingPollsRequest {
    public ListPastMeetingPollsPathParams pathParams;
    public ListPastMeetingPollsRequest withPathParams(ListPastMeetingPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPastMeetingPollsSecurity security;
    public ListPastMeetingPollsRequest withSecurity(ListPastMeetingPollsSecurity security) {
        this.security = security;
        return this;
    }
}