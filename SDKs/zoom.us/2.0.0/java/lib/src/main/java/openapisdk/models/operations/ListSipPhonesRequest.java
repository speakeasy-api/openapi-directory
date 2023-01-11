package openapisdk.models.operations;



public class ListSipPhonesRequest {
    public ListSipPhonesQueryParams queryParams;
    public ListSipPhonesRequest withQueryParams(ListSipPhonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipPhonesSecurity security;
    public ListSipPhonesRequest withSecurity(ListSipPhonesSecurity security) {
        this.security = security;
        return this;
    }
}