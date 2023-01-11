package openapisdk.models.operations;



public class GetAssetSettingsRequest {
    public GetAssetSettingsHeaders headers;
    public GetAssetSettingsRequest withHeaders(GetAssetSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAssetSettingsSecurity security;
    public GetAssetSettingsRequest withSecurity(GetAssetSettingsSecurity security) {
        this.security = security;
        return this;
    }
}