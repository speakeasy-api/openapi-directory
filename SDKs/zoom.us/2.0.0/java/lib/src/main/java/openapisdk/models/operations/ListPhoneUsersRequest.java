package openapisdk.models.operations;



public class ListPhoneUsersRequest {
    public ListPhoneUsersQueryParams queryParams;
    public ListPhoneUsersRequest withQueryParams(ListPhoneUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPhoneUsersSecurity security;
    public ListPhoneUsersRequest withSecurity(ListPhoneUsersSecurity security) {
        this.security = security;
        return this;
    }
}