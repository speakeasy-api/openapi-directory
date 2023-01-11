package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileAssociationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetFileAssociationsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}