package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayRunHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreatePayRunHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}