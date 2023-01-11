package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayRunHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public UpdatePayRunHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}