package openapisdk.models.operations;



public class UpdatePhoneSipTrunkRequest {
    public UpdatePhoneSipTrunkPathParams pathParams;
    public UpdatePhoneSipTrunkRequest withPathParams(UpdatePhoneSipTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePhoneSipTrunkRequests request;
    public UpdatePhoneSipTrunkRequest withRequest(UpdatePhoneSipTrunkRequests request) {
        this.request = request;
        return this;
    }
    public UpdatePhoneSipTrunkSecurity security;
    public UpdatePhoneSipTrunkRequest withSecurity(UpdatePhoneSipTrunkSecurity security) {
        this.security = security;
        return this;
    }
}