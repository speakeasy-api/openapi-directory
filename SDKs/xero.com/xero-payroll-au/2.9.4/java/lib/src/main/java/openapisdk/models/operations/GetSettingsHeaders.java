package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetSettingsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}