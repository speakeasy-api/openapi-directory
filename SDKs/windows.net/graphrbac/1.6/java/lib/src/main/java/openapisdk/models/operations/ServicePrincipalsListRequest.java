package openapisdk.models.operations;



public class ServicePrincipalsListRequest {
    public ServicePrincipalsListPathParams pathParams;
    public ServicePrincipalsListRequest withPathParams(ServicePrincipalsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicePrincipalsListQueryParams queryParams;
    public ServicePrincipalsListRequest withQueryParams(ServicePrincipalsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}