package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimesheetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetTimesheetHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}