package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAGroupMemberMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public UpdateAGroupMemberMultipartFormDataActionEnum action;
    public UpdateAGroupMemberMultipartFormData withAction(UpdateAGroupMemberMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=target_group_id")
    public String targetGroupId;
    public UpdateAGroupMemberMultipartFormData withTargetGroupId(String targetGroupId) {
        this.targetGroupId = targetGroupId;
        return this;
    }
}