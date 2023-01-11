package openapisdk.models.operations;



public class GetZrLocationSettingsRequest {
    public GetZrLocationSettingsPathParams pathParams;
    public GetZrLocationSettingsRequest withPathParams(GetZrLocationSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetZrLocationSettingsQueryParams queryParams;
    public GetZrLocationSettingsRequest withQueryParams(GetZrLocationSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetZrLocationSettingsSecurity security;
    public GetZrLocationSettingsRequest withSecurity(GetZrLocationSettingsSecurity security) {
        this.security = security;
        return this;
    }
}