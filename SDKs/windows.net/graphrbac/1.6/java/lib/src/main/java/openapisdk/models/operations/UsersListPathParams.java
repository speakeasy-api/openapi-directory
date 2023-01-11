package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersListPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}