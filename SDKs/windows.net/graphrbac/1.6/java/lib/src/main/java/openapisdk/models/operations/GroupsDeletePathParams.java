package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public GroupsDeletePathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsDeletePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}