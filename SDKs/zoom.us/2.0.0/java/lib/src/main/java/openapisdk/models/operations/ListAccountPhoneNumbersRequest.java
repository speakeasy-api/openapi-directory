package openapisdk.models.operations;



public class ListAccountPhoneNumbersRequest {
    public ListAccountPhoneNumbersQueryParams queryParams;
    public ListAccountPhoneNumbersRequest withQueryParams(ListAccountPhoneNumbersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountPhoneNumbersSecurity security;
    public ListAccountPhoneNumbersRequest withSecurity(ListAccountPhoneNumbersSecurity security) {
        this.security = security;
        return this;
    }
}