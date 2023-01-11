package openapisdk.models.operations;



public class PhoneUserSettingsRequest {
    public PhoneUserSettingsPathParams pathParams;
    public PhoneUserSettingsRequest withPathParams(PhoneUserSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneUserSettingsSecurity security;
    public PhoneUserSettingsRequest withSecurity(PhoneUserSettingsSecurity security) {
        this.security = security;
        return this;
    }
}