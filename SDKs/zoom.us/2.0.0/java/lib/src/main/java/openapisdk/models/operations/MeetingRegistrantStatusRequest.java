package openapisdk.models.operations;



public class MeetingRegistrantStatusRequest {
    public MeetingRegistrantStatusPathParams pathParams;
    public MeetingRegistrantStatusRequest withPathParams(MeetingRegistrantStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingRegistrantStatusQueryParams queryParams;
    public MeetingRegistrantStatusRequest withQueryParams(MeetingRegistrantStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingRegistrantStatusRequests request;
    public MeetingRegistrantStatusRequest withRequest(MeetingRegistrantStatusRequests request) {
        this.request = request;
        return this;
    }
    public MeetingRegistrantStatusSecurity security;
    public MeetingRegistrantStatusRequest withSecurity(MeetingRegistrantStatusSecurity security) {
        this.security = security;
        return this;
    }
}