package openapisdk.models.operations;



public class DomainsListRequest {
    public DomainsListPathParams pathParams;
    public DomainsListRequest withPathParams(DomainsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsListQueryParams queryParams;
    public DomainsListRequest withQueryParams(DomainsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}