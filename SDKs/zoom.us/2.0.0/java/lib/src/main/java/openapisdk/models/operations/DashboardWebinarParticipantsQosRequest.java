package openapisdk.models.operations;



public class DashboardWebinarParticipantsQosRequest {
    public DashboardWebinarParticipantsQosPathParams pathParams;
    public DashboardWebinarParticipantsQosRequest withPathParams(DashboardWebinarParticipantsQosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardWebinarParticipantsQosQueryParams queryParams;
    public DashboardWebinarParticipantsQosRequest withQueryParams(DashboardWebinarParticipantsQosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarParticipantsQosSecurity security;
    public DashboardWebinarParticipantsQosRequest withSecurity(DashboardWebinarParticipantsQosSecurity security) {
        this.security = security;
        return this;
    }
}