package openapisdk.models.operations;



public class ListServicesRequest {
    public ListServicesQueryParams queryParams;
    public ListServicesRequest withQueryParams(ListServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServicesSecurity security;
    public ListServicesRequest withSecurity(ListServicesSecurity security) {
        this.security = security;
        return this;
    }
}