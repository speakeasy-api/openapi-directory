package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuperfundHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetSuperfundHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}