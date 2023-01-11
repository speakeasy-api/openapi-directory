package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetSettingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public GetAssetSettingsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}