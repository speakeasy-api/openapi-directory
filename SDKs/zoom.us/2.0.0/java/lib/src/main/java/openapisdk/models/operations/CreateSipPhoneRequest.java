package openapisdk.models.operations;



public class CreateSipPhoneRequest {
    public CreateSipPhoneRequests request;
    public CreateSipPhoneRequest withRequest(CreateSipPhoneRequests request) {
        this.request = request;
        return this;
    }
    public CreateSipPhoneSecurity security;
    public CreateSipPhoneRequest withSecurity(CreateSipPhoneSecurity security) {
        this.security = security;
        return this;
    }
}