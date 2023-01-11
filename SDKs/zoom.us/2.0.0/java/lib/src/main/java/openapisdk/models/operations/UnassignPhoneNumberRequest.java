package openapisdk.models.operations;



public class UnassignPhoneNumberRequest {
    public UnassignPhoneNumberPathParams pathParams;
    public UnassignPhoneNumberRequest withPathParams(UnassignPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnassignPhoneNumberSecurity security;
    public UnassignPhoneNumberRequest withSecurity(UnassignPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}