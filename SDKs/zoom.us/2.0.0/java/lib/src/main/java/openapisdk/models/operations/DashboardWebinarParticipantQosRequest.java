package openapisdk.models.operations;



public class DashboardWebinarParticipantQosRequest {
    public DashboardWebinarParticipantQosPathParams pathParams;
    public DashboardWebinarParticipantQosRequest withPathParams(DashboardWebinarParticipantQosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardWebinarParticipantQosQueryParams queryParams;
    public DashboardWebinarParticipantQosRequest withQueryParams(DashboardWebinarParticipantQosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardWebinarParticipantQosSecurity security;
    public DashboardWebinarParticipantQosRequest withSecurity(DashboardWebinarParticipantQosSecurity security) {
        this.security = security;
        return this;
    }
}