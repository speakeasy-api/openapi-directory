package openapisdk.models.operations;



public class GetPhoneNumberDetailsRequest {
    public GetPhoneNumberDetailsPathParams pathParams;
    public GetPhoneNumberDetailsRequest withPathParams(GetPhoneNumberDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPhoneNumberDetailsSecurity security;
    public GetPhoneNumberDetailsRequest withSecurity(GetPhoneNumberDetailsSecurity security) {
        this.security = security;
        return this;
    }
}