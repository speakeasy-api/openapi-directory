package openapisdk.models.operations;



public class UpdateGroupSettingsRequest {
    public UpdateGroupSettingsPathParams pathParams;
    public UpdateGroupSettingsRequest withPathParams(UpdateGroupSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGroupSettingsQueryParams queryParams;
    public UpdateGroupSettingsRequest withQueryParams(UpdateGroupSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateGroupSettingsRequests request;
    public UpdateGroupSettingsRequest withRequest(UpdateGroupSettingsRequests request) {
        this.request = request;
        return this;
    }
}