package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayrollCalendarHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetPayrollCalendarHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}