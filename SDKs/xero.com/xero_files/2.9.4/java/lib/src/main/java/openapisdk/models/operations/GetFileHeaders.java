package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetFileHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}