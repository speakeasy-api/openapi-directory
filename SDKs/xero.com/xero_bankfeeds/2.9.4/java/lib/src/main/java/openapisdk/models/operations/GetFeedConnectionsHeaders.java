package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedConnectionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetFeedConnectionsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}