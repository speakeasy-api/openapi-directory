package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public UpdateFileHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}