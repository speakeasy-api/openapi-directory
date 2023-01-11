package openapisdk.models.operations;



public class ServicePrincipalsCreateRequest {
    public ServicePrincipalsCreatePathParams pathParams;
    public ServicePrincipalsCreateRequest withPathParams(ServicePrincipalsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicePrincipalsCreateQueryParams queryParams;
    public ServicePrincipalsCreateRequest withQueryParams(ServicePrincipalsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicePrincipalsCreateRequests request;
    public ServicePrincipalsCreateRequest withRequest(ServicePrincipalsCreateRequests request) {
        this.request = request;
        return this;
    }
}