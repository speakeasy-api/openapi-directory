package openapisdk.models.operations;



public class GroupLockedSettingsRequest {
    public GroupLockedSettingsPathParams pathParams;
    public GroupLockedSettingsRequest withPathParams(GroupLockedSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupLockedSettingsQueryParams queryParams;
    public GroupLockedSettingsRequest withQueryParams(GroupLockedSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupLockedSettingsRequests request;
    public GroupLockedSettingsRequest withRequest(GroupLockedSettingsRequests request) {
        this.request = request;
        return this;
    }
    public GroupLockedSettingsSecurity security;
    public GroupLockedSettingsRequest withSecurity(GroupLockedSettingsSecurity security) {
        this.security = security;
        return this;
    }
}