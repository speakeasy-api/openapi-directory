package openapisdk.models.operations;



public class UpdateAccountLockSettingsRequest {
    public UpdateAccountLockSettingsPathParams pathParams;
    public UpdateAccountLockSettingsRequest withPathParams(UpdateAccountLockSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAccountLockSettingsRequests request;
    public UpdateAccountLockSettingsRequest withRequest(UpdateAccountLockSettingsRequests request) {
        this.request = request;
        return this;
    }
    public UpdateAccountLockSettingsSecurity security;
    public UpdateAccountLockSettingsRequest withSecurity(UpdateAccountLockSettingsSecurity security) {
        this.security = security;
        return this;
    }
}