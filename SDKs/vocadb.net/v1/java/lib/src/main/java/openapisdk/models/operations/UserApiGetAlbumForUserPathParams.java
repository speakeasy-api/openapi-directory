package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetAlbumForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=albumId")
    public Integer albumId;
    public UserApiGetAlbumForUserPathParams withAlbumId(Integer albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiGetAlbumForUserPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}