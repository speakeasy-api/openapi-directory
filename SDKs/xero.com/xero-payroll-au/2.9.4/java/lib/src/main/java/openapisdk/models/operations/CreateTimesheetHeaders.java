package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTimesheetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreateTimesheetHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}