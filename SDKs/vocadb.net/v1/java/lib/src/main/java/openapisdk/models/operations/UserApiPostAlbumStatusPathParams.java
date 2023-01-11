package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostAlbumStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=albumId")
    public Integer albumId;
    public UserApiPostAlbumStatusPathParams withAlbumId(Integer albumId) {
        this.albumId = albumId;
        return this;
    }
}