package openapisdk.models.operations;



public class ListClustersRequest {
    public ListClustersQueryParams queryParams;
    public ListClustersRequest withQueryParams(ListClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListClustersSecurity security;
    public ListClustersRequest withSecurity(ListClustersSecurity security) {
        this.security = security;
        return this;
    }
}