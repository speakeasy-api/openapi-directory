package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public GroupsListPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}