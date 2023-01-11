package openapisdk.models.operations;



public class UserAssistantCreateRequest {
    public UserAssistantCreatePathParams pathParams;
    public UserAssistantCreateRequest withPathParams(UserAssistantCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserAssistantCreateRequests request;
    public UserAssistantCreateRequest withRequest(UserAssistantCreateRequests request) {
        this.request = request;
        return this;
    }
    public UserAssistantCreateSecurity security;
    public UserAssistantCreateRequest withSecurity(UserAssistantCreateSecurity security) {
        this.security = security;
        return this;
    }
}