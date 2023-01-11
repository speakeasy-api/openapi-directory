package openapisdk.models.operations;



public class ListVmsRequest {
    public ListVmsQueryParams queryParams;
    public ListVmsRequest withQueryParams(ListVmsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVmsSecurity security;
    public ListVmsRequest withSecurity(ListVmsSecurity security) {
        this.security = security;
        return this;
    }
}