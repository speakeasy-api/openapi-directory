package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVideoAsAlbumThumbnailAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public SetVideoAsAlbumThumbnailAlt1PathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public SetVideoAsAlbumThumbnailAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}