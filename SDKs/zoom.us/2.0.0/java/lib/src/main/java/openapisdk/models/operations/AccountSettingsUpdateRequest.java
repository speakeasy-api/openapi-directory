package openapisdk.models.operations;



public class AccountSettingsUpdateRequest {
    public AccountSettingsUpdatePathParams pathParams;
    public AccountSettingsUpdateRequest withPathParams(AccountSettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountSettingsUpdateQueryParams queryParams;
    public AccountSettingsUpdateRequest withQueryParams(AccountSettingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccountSettingsUpdateRequests request;
    public AccountSettingsUpdateRequest withRequest(AccountSettingsUpdateRequests request) {
        this.request = request;
        return this;
    }
}