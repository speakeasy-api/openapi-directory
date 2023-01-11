package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLeaveApplicationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreateLeaveApplicationHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}