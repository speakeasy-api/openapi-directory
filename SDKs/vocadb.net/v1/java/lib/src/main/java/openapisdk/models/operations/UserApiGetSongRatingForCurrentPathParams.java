package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetSongRatingForCurrentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=songId")
    public Integer songId;
    public UserApiGetSongRatingForCurrentPathParams withSongId(Integer songId) {
        this.songId = songId;
        return this;
    }
}