package openapisdk.models.operations;



public class MeetingRegistrantsRequest {
    public MeetingRegistrantsPathParams pathParams;
    public MeetingRegistrantsRequest withPathParams(MeetingRegistrantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingRegistrantsQueryParams queryParams;
    public MeetingRegistrantsRequest withQueryParams(MeetingRegistrantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MeetingRegistrantsSecurity security;
    public MeetingRegistrantsRequest withSecurity(MeetingRegistrantsSecurity security) {
        this.security = security;
        return this;
    }
}