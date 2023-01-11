package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeaveGroupAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public LeaveGroupAlt1PathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}