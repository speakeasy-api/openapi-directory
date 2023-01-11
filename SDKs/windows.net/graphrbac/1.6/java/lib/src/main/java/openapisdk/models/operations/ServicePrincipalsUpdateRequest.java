package openapisdk.models.operations;



public class ServicePrincipalsUpdateRequest {
    public ServicePrincipalsUpdatePathParams pathParams;
    public ServicePrincipalsUpdateRequest withPathParams(ServicePrincipalsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicePrincipalsUpdateQueryParams queryParams;
    public ServicePrincipalsUpdateRequest withQueryParams(ServicePrincipalsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicePrincipalsUpdateRequests request;
    public ServicePrincipalsUpdateRequest withRequest(ServicePrincipalsUpdateRequests request) {
        this.request = request;
        return this;
    }
}