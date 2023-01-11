package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAGroupMemberApplicationJson {
    @JsonProperty("action")
    public UpdateAGroupMemberApplicationJsonActionEnum action;
    public UpdateAGroupMemberApplicationJson withAction(UpdateAGroupMemberApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_group_id")
    public String targetGroupId;
    public UpdateAGroupMemberApplicationJson withTargetGroupId(String targetGroupId) {
        this.targetGroupId = targetGroupId;
        return this;
    }
}