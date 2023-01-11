package openapisdk.models.operations;



public class DashboardWebinarParticipantShareRequest {
    public DashboardWebinarParticipantSharePathParams pathParams;
    public DashboardWebinarParticipantShareRequest withPathParams(DashboardWebinarParticipantSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardWebinarParticipantShareQueryParams queryParams;
    public DashboardWebinarParticipantShareRequest withQueryParams(DashboardWebinarParticipantShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarParticipantShareSecurity security;
    public DashboardWebinarParticipantShareRequest withSecurity(DashboardWebinarParticipantShareSecurity security) {
        this.security = security;
        return this;
    }
}