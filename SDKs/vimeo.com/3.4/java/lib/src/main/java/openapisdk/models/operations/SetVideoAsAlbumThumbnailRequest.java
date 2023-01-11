package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVideoAsAlbumThumbnailRequest {
    public SetVideoAsAlbumThumbnailPathParams pathParams;
    public SetVideoAsAlbumThumbnailRequest withPathParams(SetVideoAsAlbumThumbnailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetVideoAsAlbumThumbnailRequestBody request;
    public SetVideoAsAlbumThumbnailRequest withRequest(SetVideoAsAlbumThumbnailRequestBody request) {
        this.request = request;
        return this;
    }
    public SetVideoAsAlbumThumbnailSecurity security;
    public SetVideoAsAlbumThumbnailRequest withSecurity(SetVideoAsAlbumThumbnailSecurity security) {
        this.security = security;
        return this;
    }
}