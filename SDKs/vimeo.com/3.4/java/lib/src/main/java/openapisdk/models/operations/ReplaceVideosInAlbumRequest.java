package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceVideosInAlbumRequest {
    public ReplaceVideosInAlbumPathParams pathParams;
    public ReplaceVideosInAlbumRequest withPathParams(ReplaceVideosInAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReplaceVideosInAlbumRequestBody request;
    public ReplaceVideosInAlbumRequest withRequest(ReplaceVideosInAlbumRequestBody request) {
        this.request = request;
        return this;
    }
    public ReplaceVideosInAlbumSecurity security;
    public ReplaceVideosInAlbumRequest withSecurity(ReplaceVideosInAlbumSecurity security) {
        this.security = security;
        return this;
    }
}