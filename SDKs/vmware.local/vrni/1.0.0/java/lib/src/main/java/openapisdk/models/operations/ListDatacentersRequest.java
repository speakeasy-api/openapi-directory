package openapisdk.models.operations;



public class ListDatacentersRequest {
    public ListDatacentersQueryParams queryParams;
    public ListDatacentersRequest withQueryParams(ListDatacentersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatacentersSecurity security;
    public ListDatacentersRequest withSecurity(ListDatacentersSecurity security) {
        this.security = security;
        return this;
    }
}