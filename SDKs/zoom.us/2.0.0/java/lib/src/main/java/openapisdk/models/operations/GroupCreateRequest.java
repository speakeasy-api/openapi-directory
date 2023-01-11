package openapisdk.models.operations;



public class GroupCreateRequest {
    public GroupCreateRequests request;
    public GroupCreateRequest withRequest(GroupCreateRequests request) {
        this.request = request;
        return this;
    }
    public GroupCreateSecurity security;
    public GroupCreateRequest withSecurity(GroupCreateSecurity security) {
        this.security = security;
        return this;
    }
}