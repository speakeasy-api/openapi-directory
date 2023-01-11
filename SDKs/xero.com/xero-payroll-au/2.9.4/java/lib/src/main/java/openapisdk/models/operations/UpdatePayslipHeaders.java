package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayslipHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public UpdatePayslipHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}