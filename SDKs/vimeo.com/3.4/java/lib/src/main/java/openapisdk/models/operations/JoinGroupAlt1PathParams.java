package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JoinGroupAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public JoinGroupAlt1PathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}