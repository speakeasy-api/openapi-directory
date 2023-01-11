package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostFollowedTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Integer tagId;
    public UserApiPostFollowedTagPathParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}