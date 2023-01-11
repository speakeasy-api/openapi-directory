package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiDeleteFollowedTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public Integer tagId;
    public UserApiDeleteFollowedTagPathParams withTagId(Integer tagId) {
        this.tagId = tagId;
        return this;
    }
}