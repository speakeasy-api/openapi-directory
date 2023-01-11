package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSuperfundHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreateSuperfundHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}