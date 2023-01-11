package openapisdk.models.operations;



public class PastMeetingDetailsRequest {
    public PastMeetingDetailsPathParams pathParams;
    public PastMeetingDetailsRequest withPathParams(PastMeetingDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PastMeetingDetailsSecurity security;
    public PastMeetingDetailsRequest withSecurity(PastMeetingDetailsSecurity security) {
        this.security = security;
        return this;
    }
}