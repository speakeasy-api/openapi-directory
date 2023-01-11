package openapisdk.models.operations;



public class UpdatePhoneNumberDetailsRequest {
    public UpdatePhoneNumberDetailsPathParams pathParams;
    public UpdatePhoneNumberDetailsRequest withPathParams(UpdatePhoneNumberDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePhoneNumberDetailsRequests request;
    public UpdatePhoneNumberDetailsRequest withRequest(UpdatePhoneNumberDetailsRequests request) {
        this.request = request;
        return this;
    }
    public UpdatePhoneNumberDetailsSecurity security;
    public UpdatePhoneNumberDetailsRequest withSecurity(UpdatePhoneNumberDetailsSecurity security) {
        this.security = security;
        return this;
    }
}