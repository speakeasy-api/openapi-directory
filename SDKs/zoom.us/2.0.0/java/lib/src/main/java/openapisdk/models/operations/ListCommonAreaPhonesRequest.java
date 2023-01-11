package openapisdk.models.operations;



public class ListCommonAreaPhonesRequest {
    public ListCommonAreaPhonesQueryParams queryParams;
    public ListCommonAreaPhonesRequest withQueryParams(ListCommonAreaPhonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCommonAreaPhonesSecurity security;
    public ListCommonAreaPhonesRequest withSecurity(ListCommonAreaPhonesSecurity security) {
        this.security = security;
        return this;
    }
}