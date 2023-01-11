package openapisdk.models.operations;



public class ReportSignInSignOutActivitiesRequest {
    public ReportSignInSignOutActivitiesQueryParams queryParams;
    public ReportSignInSignOutActivitiesRequest withQueryParams(ReportSignInSignOutActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReportSignInSignOutActivitiesSecurity security;
    public ReportSignInSignOutActivitiesRequest withSecurity(ReportSignInSignOutActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}