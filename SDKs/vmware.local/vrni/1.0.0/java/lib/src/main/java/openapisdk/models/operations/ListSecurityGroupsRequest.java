package openapisdk.models.operations;



public class ListSecurityGroupsRequest {
    public ListSecurityGroupsQueryParams queryParams;
    public ListSecurityGroupsRequest withQueryParams(ListSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecurityGroupsSecurity security;
    public ListSecurityGroupsRequest withSecurity(ListSecurityGroupsSecurity security) {
        this.security = security;
        return this;
    }
}