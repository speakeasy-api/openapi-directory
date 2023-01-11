package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignedInUserGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public SignedInUserGetPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}