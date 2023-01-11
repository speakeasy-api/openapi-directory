package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=albumId")
    public Integer albumId;
    public GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams withAlbumId(Integer albumId) {
        this.albumId = albumId;
        return this;
    }
}