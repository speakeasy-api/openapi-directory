package openapisdk.models.operations;



public class UserApiGetSongListsRequest {
    public UserApiGetSongListsPathParams pathParams;
    public UserApiGetSongListsRequest withPathParams(UserApiGetSongListsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserApiGetSongListsQueryParams queryParams;
    public UserApiGetSongListsRequest withQueryParams(UserApiGetSongListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}