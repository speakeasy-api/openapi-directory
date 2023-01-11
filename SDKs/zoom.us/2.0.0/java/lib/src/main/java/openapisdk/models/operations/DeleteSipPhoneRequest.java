package openapisdk.models.operations;



public class DeleteSipPhoneRequest {
    public DeleteSipPhonePathParams pathParams;
    public DeleteSipPhoneRequest withPathParams(DeleteSipPhonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipPhoneSecurity security;
    public DeleteSipPhoneRequest withSecurity(DeleteSipPhoneSecurity security) {
        this.security = security;
        return this;
    }
}