package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideoFromAlbumAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public RemoveVideoFromAlbumAlt1PathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public RemoveVideoFromAlbumAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}