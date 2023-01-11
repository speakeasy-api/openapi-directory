package openapisdk.models.operations;



public class AssignPhoneNumberRequest {
    public AssignPhoneNumberPathParams pathParams;
    public AssignPhoneNumberRequest withPathParams(AssignPhoneNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssignPhoneNumberRequests request;
    public AssignPhoneNumberRequest withRequest(AssignPhoneNumberRequests request) {
        this.request = request;
        return this;
    }
    public AssignPhoneNumberSecurity security;
    public AssignPhoneNumberRequest withSecurity(AssignPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}