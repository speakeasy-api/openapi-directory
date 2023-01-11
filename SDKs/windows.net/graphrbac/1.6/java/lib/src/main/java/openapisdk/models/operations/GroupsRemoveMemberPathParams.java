package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsRemoveMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupObjectId")
    public String groupObjectId;
    public GroupsRemoveMemberPathParams withGroupObjectId(String groupObjectId) {
        this.groupObjectId = groupObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberObjectId")
    public String memberObjectId;
    public GroupsRemoveMemberPathParams withMemberObjectId(String memberObjectId) {
        this.memberObjectId = memberObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsRemoveMemberPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}