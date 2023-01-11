package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayrollCalendarHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreatePayrollCalendarHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}