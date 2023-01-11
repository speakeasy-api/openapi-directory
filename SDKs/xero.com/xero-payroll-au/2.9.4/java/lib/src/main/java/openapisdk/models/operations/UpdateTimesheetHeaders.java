package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTimesheetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public UpdateTimesheetHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}