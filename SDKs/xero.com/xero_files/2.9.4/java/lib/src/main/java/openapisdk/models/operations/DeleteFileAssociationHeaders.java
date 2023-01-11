package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileAssociationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public DeleteFileAssociationHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}