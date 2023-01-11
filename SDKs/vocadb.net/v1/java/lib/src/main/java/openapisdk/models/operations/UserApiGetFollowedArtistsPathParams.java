package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetFollowedArtistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiGetFollowedArtistsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}