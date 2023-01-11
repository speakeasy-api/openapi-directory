package openapisdk.models.operations;



public class MeetingLiveStreamStatusUpdateRequest {
    public MeetingLiveStreamStatusUpdatePathParams pathParams;
    public MeetingLiveStreamStatusUpdateRequest withPathParams(MeetingLiveStreamStatusUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingLiveStreamStatusUpdateRequests request;
    public MeetingLiveStreamStatusUpdateRequest withRequest(MeetingLiveStreamStatusUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingLiveStreamStatusUpdateSecurity security;
    public MeetingLiveStreamStatusUpdateRequest withSecurity(MeetingLiveStreamStatusUpdateSecurity security) {
        this.security = security;
        return this;
    }
}