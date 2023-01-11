package openapisdk.models.operations;



public class ListVmknicsRequest {
    public ListVmknicsQueryParams queryParams;
    public ListVmknicsRequest withQueryParams(ListVmknicsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVmknicsSecurity security;
    public ListVmknicsRequest withSecurity(ListVmknicsSecurity security) {
        this.security = security;
        return this;
    }
}