package openapisdk.models.operations;



public class CreatePhoneSiteRequest {
    public CreatePhoneSiteRequests request;
    public CreatePhoneSiteRequest withRequest(CreatePhoneSiteRequests request) {
        this.request = request;
        return this;
    }
    public CreatePhoneSiteSecurity security;
    public CreatePhoneSiteRequest withSecurity(CreatePhoneSiteSecurity security) {
        this.security = security;
        return this;
    }
}