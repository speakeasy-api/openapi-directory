package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsRemoveOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public GroupsRemoveOwnerPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownerObjectId")
    public String ownerObjectId;
    public GroupsRemoveOwnerPathParams withOwnerObjectId(String ownerObjectId) {
        this.ownerObjectId = ownerObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsRemoveOwnerPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}