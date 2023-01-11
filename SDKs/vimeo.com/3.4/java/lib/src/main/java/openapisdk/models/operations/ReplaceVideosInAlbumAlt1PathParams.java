package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceVideosInAlbumAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public ReplaceVideosInAlbumAlt1PathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
}