package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFolderHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public UpdateFolderHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}