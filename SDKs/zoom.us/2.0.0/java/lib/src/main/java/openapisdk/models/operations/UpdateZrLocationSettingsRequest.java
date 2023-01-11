package openapisdk.models.operations;



public class UpdateZrLocationSettingsRequest {
    public UpdateZrLocationSettingsPathParams pathParams;
    public UpdateZrLocationSettingsRequest withPathParams(UpdateZrLocationSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateZrLocationSettingsQueryParams queryParams;
    public UpdateZrLocationSettingsRequest withQueryParams(UpdateZrLocationSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateZrLocationSettingsRequests request;
    public UpdateZrLocationSettingsRequest withRequest(UpdateZrLocationSettingsRequests request) {
        this.request = request;
        return this;
    }
    public UpdateZrLocationSettingsSecurity security;
    public UpdateZrLocationSettingsRequest withSecurity(UpdateZrLocationSettingsSecurity security) {
        this.security = security;
        return this;
    }
}