package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoldersHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetFoldersHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}