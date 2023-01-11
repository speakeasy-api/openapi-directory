package openapisdk.models.operations;



public class AccountSettingsRequest {
    public AccountSettingsPathParams pathParams;
    public AccountSettingsRequest withPathParams(AccountSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountSettingsQueryParams queryParams;
    public AccountSettingsRequest withQueryParams(AccountSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}