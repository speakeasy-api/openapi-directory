package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsListOwnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public GroupsListOwnersPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsListOwnersPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}