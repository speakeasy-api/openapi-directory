package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsIsMemberOfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsIsMemberOfPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}