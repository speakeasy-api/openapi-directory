package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFeedConnectionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public DeleteFeedConnectionsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}