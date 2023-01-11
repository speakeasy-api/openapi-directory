package openapisdk.models.operations;



public class ListServiceGroupsRequest {
    public ListServiceGroupsQueryParams queryParams;
    public ListServiceGroupsRequest withQueryParams(ListServiceGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceGroupsSecurity security;
    public ListServiceGroupsRequest withSecurity(ListServiceGroupsSecurity security) {
        this.security = security;
        return this;
    }
}