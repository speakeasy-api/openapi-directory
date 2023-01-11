package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceVideosInAlbumPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public ReplaceVideosInAlbumPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public ReplaceVideosInAlbumPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}