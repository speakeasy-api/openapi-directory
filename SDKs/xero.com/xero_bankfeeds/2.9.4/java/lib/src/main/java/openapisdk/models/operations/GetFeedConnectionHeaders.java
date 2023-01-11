package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedConnectionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetFeedConnectionHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}