package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetTypesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetAssetTypesHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}