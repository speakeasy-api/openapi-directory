package openapisdk.models.operations;



public class ListSecurityTagsRequest {
    public ListSecurityTagsQueryParams queryParams;
    public ListSecurityTagsRequest withQueryParams(ListSecurityTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecurityTagsSecurity security;
    public ListSecurityTagsRequest withSecurity(ListSecurityTagsSecurity security) {
        this.security = security;
        return this;
    }
}