package openapisdk.models.operations;



public class MeetingRegistrantCreateRequest {
    public MeetingRegistrantCreatePathParams pathParams;
    public MeetingRegistrantCreateRequest withPathParams(MeetingRegistrantCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingRegistrantCreateQueryParams queryParams;
    public MeetingRegistrantCreateRequest withQueryParams(MeetingRegistrantCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingRegistrantCreateRequests request;
    public MeetingRegistrantCreateRequest withRequest(MeetingRegistrantCreateRequests request) {
        this.request = request;
        return this;
    }
    public MeetingRegistrantCreateSecurity security;
    public MeetingRegistrantCreateRequest withSecurity(MeetingRegistrantCreateSecurity security) {
        this.security = security;
        return this;
    }
}