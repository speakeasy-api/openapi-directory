package openapisdk.models.operations;



public class GetZrSettingsRequest {
    public GetZrSettingsPathParams pathParams;
    public GetZrSettingsRequest withPathParams(GetZrSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetZrSettingsQueryParams queryParams;
    public GetZrSettingsRequest withQueryParams(GetZrSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetZrSettingsSecurity security;
    public GetZrSettingsRequest withSecurity(GetZrSettingsSecurity security) {
        this.security = security;
        return this;
    }
}