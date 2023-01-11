package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSuperfundHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public UpdateSuperfundHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}