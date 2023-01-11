package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileContentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetFileContentHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}