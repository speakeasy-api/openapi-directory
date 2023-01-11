package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceAlbumCustomThumbRequest {
    public ReplaceAlbumCustomThumbPathParams pathParams;
    public ReplaceAlbumCustomThumbRequest withPathParams(ReplaceAlbumCustomThumbPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.picture+json")
    public ReplaceAlbumCustomThumbRequestBody request;
    public ReplaceAlbumCustomThumbRequest withRequest(ReplaceAlbumCustomThumbRequestBody request) {
        this.request = request;
        return this;
    }
    public ReplaceAlbumCustomThumbSecurity security;
    public ReplaceAlbumCustomThumbRequest withSecurity(ReplaceAlbumCustomThumbSecurity security) {
        this.security = security;
        return this;
    }
}