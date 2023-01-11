package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetSongRatingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiGetSongRatingPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=songId")
    public Integer songId;
    public UserApiGetSongRatingPathParams withSongId(Integer songId) {
        this.songId = songId;
        return this;
    }
}