package openapisdk.models.operations;



public class ListBlockedListRequest {
    public ListBlockedListQueryParams queryParams;
    public ListBlockedListRequest withQueryParams(ListBlockedListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBlockedListSecurity security;
    public ListBlockedListRequest withSecurity(ListBlockedListSecurity security) {
        this.security = security;
        return this;
    }
}