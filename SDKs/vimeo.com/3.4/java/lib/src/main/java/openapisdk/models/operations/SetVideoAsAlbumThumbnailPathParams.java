package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVideoAsAlbumThumbnailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public SetVideoAsAlbumThumbnailPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public SetVideoAsAlbumThumbnailPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public SetVideoAsAlbumThumbnailPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}