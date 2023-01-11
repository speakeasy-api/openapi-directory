package openapisdk.models.operations;



public class DashboardWebinarParticipantsRequest {
    public DashboardWebinarParticipantsPathParams pathParams;
    public DashboardWebinarParticipantsRequest withPathParams(DashboardWebinarParticipantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardWebinarParticipantsQueryParams queryParams;
    public DashboardWebinarParticipantsRequest withQueryParams(DashboardWebinarParticipantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarParticipantsSecurity security;
    public DashboardWebinarParticipantsRequest withSecurity(DashboardWebinarParticipantsSecurity security) {
        this.security = security;
        return this;
    }
}