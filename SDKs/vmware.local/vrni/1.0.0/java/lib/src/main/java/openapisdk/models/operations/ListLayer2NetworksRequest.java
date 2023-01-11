package openapisdk.models.operations;



public class ListLayer2NetworksRequest {
    public ListLayer2NetworksQueryParams queryParams;
    public ListLayer2NetworksRequest withQueryParams(ListLayer2NetworksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLayer2NetworksSecurity security;
    public ListLayer2NetworksRequest withSecurity(ListLayer2NetworksSecurity security) {
        this.security = security;
        return this;
    }
}