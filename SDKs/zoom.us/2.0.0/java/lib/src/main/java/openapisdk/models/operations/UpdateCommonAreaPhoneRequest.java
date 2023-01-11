package openapisdk.models.operations;



public class UpdateCommonAreaPhoneRequest {
    public UpdateCommonAreaPhonePathParams pathParams;
    public UpdateCommonAreaPhoneRequest withPathParams(UpdateCommonAreaPhonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCommonAreaPhoneRequests request;
    public UpdateCommonAreaPhoneRequest withRequest(UpdateCommonAreaPhoneRequests request) {
        this.request = request;
        return this;
    }
    public UpdateCommonAreaPhoneSecurity security;
    public UpdateCommonAreaPhoneRequest withSecurity(UpdateCommonAreaPhoneSecurity security) {
        this.security = security;
        return this;
    }
}