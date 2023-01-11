package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public CreateAssetHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}