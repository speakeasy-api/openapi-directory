package openapisdk.models.operations;



public class GetGroupSettingsRequest {
    public GetGroupSettingsPathParams pathParams;
    public GetGroupSettingsRequest withPathParams(GetGroupSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupSettingsQueryParams queryParams;
    public GetGroupSettingsRequest withQueryParams(GetGroupSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGroupSettingsSecurity security;
    public GetGroupSettingsRequest withSecurity(GetGroupSettingsSecurity security) {
        this.security = security;
        return this;
    }
}