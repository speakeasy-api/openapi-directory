package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLeaveApplicationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetLeaveApplicationHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}