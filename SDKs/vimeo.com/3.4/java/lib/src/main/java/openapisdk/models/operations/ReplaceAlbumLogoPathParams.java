package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceAlbumLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public ReplaceAlbumLogoPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logo_id")
    public Double logoId;
    public ReplaceAlbumLogoPathParams withLogoId(Double logoId) {
        this.logoId = logoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public ReplaceAlbumLogoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}