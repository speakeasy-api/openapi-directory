package openapisdk.models.operations;



public class PostPhoneSipTrunkRequest {
    public PostPhoneSipTrunkPathParams pathParams;
    public PostPhoneSipTrunkRequest withPathParams(PostPhoneSipTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPhoneSipTrunkRequests request;
    public PostPhoneSipTrunkRequest withRequest(PostPhoneSipTrunkRequests request) {
        this.request = request;
        return this;
    }
    public PostPhoneSipTrunkSecurity security;
    public PostPhoneSipTrunkRequest withSecurity(PostPhoneSipTrunkSecurity security) {
        this.security = security;
        return this;
    }
}