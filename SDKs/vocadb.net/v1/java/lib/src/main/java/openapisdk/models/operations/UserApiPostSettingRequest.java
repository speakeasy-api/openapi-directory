package openapisdk.models.operations;



public class UserApiPostSettingRequest {
    public UserApiPostSettingPathParams pathParams;
    public UserApiPostSettingRequest withPathParams(UserApiPostSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserApiPostSettingRequests request;
    public UserApiPostSettingRequest withRequest(UserApiPostSettingRequests request) {
        this.request = request;
        return this;
    }
}