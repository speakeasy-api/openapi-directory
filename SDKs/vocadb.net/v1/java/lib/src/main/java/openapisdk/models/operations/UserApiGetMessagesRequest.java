package openapisdk.models.operations;



public class UserApiGetMessagesRequest {
    public UserApiGetMessagesPathParams pathParams;
    public UserApiGetMessagesRequest withPathParams(UserApiGetMessagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserApiGetMessagesQueryParams queryParams;
    public UserApiGetMessagesRequest withQueryParams(UserApiGetMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}