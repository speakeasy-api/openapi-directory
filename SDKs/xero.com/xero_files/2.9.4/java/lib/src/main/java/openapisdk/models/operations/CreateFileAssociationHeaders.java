package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFileAssociationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public CreateFileAssociationHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}