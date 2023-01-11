package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFolderHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public DeleteFolderHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}