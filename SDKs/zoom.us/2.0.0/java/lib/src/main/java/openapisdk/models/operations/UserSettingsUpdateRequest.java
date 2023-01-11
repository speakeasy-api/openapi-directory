package openapisdk.models.operations;



public class UserSettingsUpdateRequest {
    public UserSettingsUpdatePathParams pathParams;
    public UserSettingsUpdateRequest withPathParams(UserSettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserSettingsUpdateQueryParams queryParams;
    public UserSettingsUpdateRequest withQueryParams(UserSettingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserSettingsUpdateRequests request;
    public UserSettingsUpdateRequest withRequest(UserSettingsUpdateRequests request) {
        this.request = request;
        return this;
    }
    public UserSettingsUpdateSecurity security;
    public UserSettingsUpdateRequest withSecurity(UserSettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}