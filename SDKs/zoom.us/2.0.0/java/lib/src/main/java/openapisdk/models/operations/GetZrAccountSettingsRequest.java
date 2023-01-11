package openapisdk.models.operations;



public class GetZrAccountSettingsRequest {
    public GetZrAccountSettingsQueryParams queryParams;
    public GetZrAccountSettingsRequest withQueryParams(GetZrAccountSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetZrAccountSettingsSecurity security;
    public GetZrAccountSettingsRequest withSecurity(GetZrAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
}