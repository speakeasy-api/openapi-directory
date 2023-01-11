package openapisdk.models.operations;



public class ListNsxManagersRequest {
    public ListNsxManagersQueryParams queryParams;
    public ListNsxManagersRequest withQueryParams(ListNsxManagersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNsxManagersSecurity security;
    public ListNsxManagersRequest withSecurity(ListNsxManagersSecurity security) {
        this.security = security;
        return this;
    }
}