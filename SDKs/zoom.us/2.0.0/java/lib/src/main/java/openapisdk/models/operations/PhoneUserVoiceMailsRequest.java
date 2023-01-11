package openapisdk.models.operations;



public class PhoneUserVoiceMailsRequest {
    public PhoneUserVoiceMailsPathParams pathParams;
    public PhoneUserVoiceMailsRequest withPathParams(PhoneUserVoiceMailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneUserVoiceMailsQueryParams queryParams;
    public PhoneUserVoiceMailsRequest withQueryParams(PhoneUserVoiceMailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PhoneUserVoiceMailsSecurity security;
    public PhoneUserVoiceMailsRequest withSecurity(PhoneUserVoiceMailsSecurity security) {
        this.security = security;
        return this;
    }
}