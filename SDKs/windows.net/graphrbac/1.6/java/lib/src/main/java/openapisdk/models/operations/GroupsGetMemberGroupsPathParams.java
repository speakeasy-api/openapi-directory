package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsGetMemberGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public GroupsGetMemberGroupsPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsGetMemberGroupsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}