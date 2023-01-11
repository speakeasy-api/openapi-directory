package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetMemberGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public UsersGetMemberGroupsPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersGetMemberGroupsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}