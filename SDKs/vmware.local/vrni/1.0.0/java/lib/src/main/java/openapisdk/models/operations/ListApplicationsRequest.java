package openapisdk.models.operations;



public class ListApplicationsRequest {
    public ListApplicationsQueryParams queryParams;
    public ListApplicationsRequest withQueryParams(ListApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApplicationsSecurity security;
    public ListApplicationsRequest withSecurity(ListApplicationsSecurity security) {
        this.security = security;
        return this;
    }
}