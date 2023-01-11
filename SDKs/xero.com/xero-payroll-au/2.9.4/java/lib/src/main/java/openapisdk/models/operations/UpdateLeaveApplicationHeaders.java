package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLeaveApplicationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public UpdateLeaveApplicationHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}