package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignedInUserListOwnedObjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public SignedInUserListOwnedObjectsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}