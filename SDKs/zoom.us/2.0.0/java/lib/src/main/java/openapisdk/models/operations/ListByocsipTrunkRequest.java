package openapisdk.models.operations;



public class ListByocsipTrunkRequest {
    public ListByocsipTrunkQueryParams queryParams;
    public ListByocsipTrunkRequest withQueryParams(ListByocsipTrunkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListByocsipTrunkSecurity security;
    public ListByocsipTrunkRequest withSecurity(ListByocsipTrunkSecurity security) {
        this.security = security;
        return this;
    }
}