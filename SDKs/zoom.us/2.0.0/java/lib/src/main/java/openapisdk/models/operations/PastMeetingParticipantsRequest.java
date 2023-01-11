package openapisdk.models.operations;



public class PastMeetingParticipantsRequest {
    public PastMeetingParticipantsPathParams pathParams;
    public PastMeetingParticipantsRequest withPathParams(PastMeetingParticipantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PastMeetingParticipantsQueryParams queryParams;
    public PastMeetingParticipantsRequest withQueryParams(PastMeetingParticipantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PastMeetingParticipantsSecurity security;
    public PastMeetingParticipantsRequest withSecurity(PastMeetingParticipantsSecurity security) {
        this.security = security;
        return this;
    }
}