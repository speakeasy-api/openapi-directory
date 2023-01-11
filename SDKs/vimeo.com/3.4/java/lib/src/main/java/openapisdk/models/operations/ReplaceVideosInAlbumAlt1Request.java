package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceVideosInAlbumAlt1Request {
    public ReplaceVideosInAlbumAlt1PathParams pathParams;
    public ReplaceVideosInAlbumAlt1Request withPathParams(ReplaceVideosInAlbumAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReplaceVideosInAlbumAlt1RequestBody request;
    public ReplaceVideosInAlbumAlt1Request withRequest(ReplaceVideosInAlbumAlt1RequestBody request) {
        this.request = request;
        return this;
    }
    public ReplaceVideosInAlbumAlt1Security security;
    public ReplaceVideosInAlbumAlt1Request withSecurity(ReplaceVideosInAlbumAlt1Security security) {
        this.security = security;
        return this;
    }
}