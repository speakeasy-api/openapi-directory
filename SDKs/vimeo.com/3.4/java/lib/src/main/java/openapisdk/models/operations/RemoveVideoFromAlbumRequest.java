package openapisdk.models.operations;



public class RemoveVideoFromAlbumRequest {
    public RemoveVideoFromAlbumPathParams pathParams;
    public RemoveVideoFromAlbumRequest withPathParams(RemoveVideoFromAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveVideoFromAlbumSecurity security;
    public RemoveVideoFromAlbumRequest withSecurity(RemoveVideoFromAlbumSecurity security) {
        this.security = security;
        return this;
    }
}