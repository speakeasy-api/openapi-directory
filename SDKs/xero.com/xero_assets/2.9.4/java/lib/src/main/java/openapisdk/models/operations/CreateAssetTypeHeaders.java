package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetTypeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public CreateAssetTypeHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}