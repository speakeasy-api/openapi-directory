package openapisdk.models.operations;



public class GroupMembersDeleteRequest {
    public GroupMembersDeletePathParams pathParams;
    public GroupMembersDeleteRequest withPathParams(GroupMembersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupMembersDeleteSecurity security;
    public GroupMembersDeleteRequest withSecurity(GroupMembersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}