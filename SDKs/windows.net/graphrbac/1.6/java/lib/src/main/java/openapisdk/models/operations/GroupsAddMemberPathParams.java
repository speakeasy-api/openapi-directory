package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsAddMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupObjectId")
    public String groupObjectId;
    public GroupsAddMemberPathParams withGroupObjectId(String groupObjectId) {
        this.groupObjectId = groupObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsAddMemberPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}