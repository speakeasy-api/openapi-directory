package openapisdk.models.operations;



public class ListVnicsRequest {
    public ListVnicsQueryParams queryParams;
    public ListVnicsRequest withQueryParams(ListVnicsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVnicsSecurity security;
    public ListVnicsRequest withSecurity(ListVnicsSecurity security) {
        this.security = security;
        return this;
    }
}