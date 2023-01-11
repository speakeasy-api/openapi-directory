package openapisdk.models.operations;



public class UpdateZrSettingsRequest {
    public UpdateZrSettingsPathParams pathParams;
    public UpdateZrSettingsRequest withPathParams(UpdateZrSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateZrSettingsQueryParams queryParams;
    public UpdateZrSettingsRequest withQueryParams(UpdateZrSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateZrSettingsRequests request;
    public UpdateZrSettingsRequest withRequest(UpdateZrSettingsRequests request) {
        this.request = request;
        return this;
    }
    public UpdateZrSettingsSecurity security;
    public UpdateZrSettingsRequest withSecurity(UpdateZrSettingsSecurity security) {
        this.security = security;
        return this;
    }
}