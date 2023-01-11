package openapisdk.models.operations;



public class MeetingRecordingRegistrantsRequest {
    public MeetingRecordingRegistrantsPathParams pathParams;
    public MeetingRecordingRegistrantsRequest withPathParams(MeetingRecordingRegistrantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingRecordingRegistrantsQueryParams queryParams;
    public MeetingRecordingRegistrantsRequest withQueryParams(MeetingRecordingRegistrantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingRecordingRegistrantsSecurity security;
    public MeetingRecordingRegistrantsRequest withSecurity(MeetingRecordingRegistrantsSecurity security) {
        this.security = security;
        return this;
    }
}