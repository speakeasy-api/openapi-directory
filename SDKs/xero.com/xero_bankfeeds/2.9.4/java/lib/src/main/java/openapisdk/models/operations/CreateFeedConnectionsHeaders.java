package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFeedConnectionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreateFeedConnectionsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}