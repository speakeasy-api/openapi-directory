package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetAssetByIdHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}