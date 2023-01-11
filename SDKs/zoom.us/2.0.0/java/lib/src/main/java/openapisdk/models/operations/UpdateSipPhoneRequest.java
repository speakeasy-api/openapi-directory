package openapisdk.models.operations;



public class UpdateSipPhoneRequest {
    public UpdateSipPhonePathParams pathParams;
    public UpdateSipPhoneRequest withPathParams(UpdateSipPhonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSipPhoneRequests request;
    public UpdateSipPhoneRequest withRequest(UpdateSipPhoneRequests request) {
        this.request = request;
        return this;
    }
    public UpdateSipPhoneSecurity security;
    public UpdateSipPhoneRequest withSecurity(UpdateSipPhoneSecurity security) {
        this.security = security;
        return this;
    }
}