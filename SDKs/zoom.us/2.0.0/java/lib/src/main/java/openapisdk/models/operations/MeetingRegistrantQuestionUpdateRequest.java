package openapisdk.models.operations;



public class MeetingRegistrantQuestionUpdateRequest {
    public MeetingRegistrantQuestionUpdatePathParams pathParams;
    public MeetingRegistrantQuestionUpdateRequest withPathParams(MeetingRegistrantQuestionUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingRegistrantQuestionUpdateRequests request;
    public MeetingRegistrantQuestionUpdateRequest withRequest(MeetingRegistrantQuestionUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingRegistrantQuestionUpdateSecurity security;
    public MeetingRegistrantQuestionUpdateRequest withSecurity(MeetingRegistrantQuestionUpdateSecurity security) {
        this.security = security;
        return this;
    }
}