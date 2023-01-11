package openapisdk.models.operations;



public class GetSettingsRequest {
    public GetSettingsHeaders headers;
    public GetSettingsRequest withHeaders(GetSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSettingsSecurity security;
    public GetSettingsRequest withSecurity(GetSettingsSecurity security) {
        this.security = security;
        return this;
    }
}