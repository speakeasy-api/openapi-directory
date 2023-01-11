package openapisdk.models.operations;



public class MeetingLiveStreamUpdateRequest {
    public MeetingLiveStreamUpdatePathParams pathParams;
    public MeetingLiveStreamUpdateRequest withPathParams(MeetingLiveStreamUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingLiveStreamUpdateRequests request;
    public MeetingLiveStreamUpdateRequest withRequest(MeetingLiveStreamUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingLiveStreamUpdateSecurity security;
    public MeetingLiveStreamUpdateRequest withSecurity(MeetingLiveStreamUpdateSecurity security) {
        this.security = security;
        return this;
    }
}