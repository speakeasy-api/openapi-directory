package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiDeleteProfileCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public Integer commentId;
    public UserApiDeleteProfileCommentPathParams withCommentId(Integer commentId) {
        this.commentId = commentId;
        return this;
    }
}