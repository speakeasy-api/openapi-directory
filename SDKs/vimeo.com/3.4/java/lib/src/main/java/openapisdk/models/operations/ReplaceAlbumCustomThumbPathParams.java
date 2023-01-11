package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceAlbumCustomThumbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public ReplaceAlbumCustomThumbPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thumbnail_id")
    public Double thumbnailId;
    public ReplaceAlbumCustomThumbPathParams withThumbnailId(Double thumbnailId) {
        this.thumbnailId = thumbnailId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public ReplaceAlbumCustomThumbPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}