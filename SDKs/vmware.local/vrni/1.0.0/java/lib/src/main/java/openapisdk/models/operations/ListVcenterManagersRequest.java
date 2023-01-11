package openapisdk.models.operations;



public class ListVcenterManagersRequest {
    public ListVcenterManagersQueryParams queryParams;
    public ListVcenterManagersRequest withQueryParams(ListVcenterManagersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVcenterManagersSecurity security;
    public ListVcenterManagersRequest withSecurity(ListVcenterManagersSecurity security) {
        this.security = security;
        return this;
    }
}