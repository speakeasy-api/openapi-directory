package openapisdk.models.operations;



public class ImGroupMembersCreateRequest {
    public ImGroupMembersCreatePathParams pathParams;
    public ImGroupMembersCreateRequest withPathParams(ImGroupMembersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ImGroupMembersCreateRequests request;
    public ImGroupMembersCreateRequest withRequest(ImGroupMembersCreateRequests request) {
        this.request = request;
        return this;
    }
    public ImGroupMembersCreateSecurity security;
    public ImGroupMembersCreateRequest withSecurity(ImGroupMembersCreateSecurity security) {
        this.security = security;
        return this;
    }
}