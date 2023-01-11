package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsCreatePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}