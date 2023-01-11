package openapisdk.models.operations;



public class ListIpSetsRequest {
    public ListIpSetsQueryParams queryParams;
    public ListIpSetsRequest withQueryParams(ListIpSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIpSetsSecurity security;
    public ListIpSetsRequest withSecurity(ListIpSetsSecurity security) {
        this.security = security;
        return this;
    }
}