package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersCreatePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}