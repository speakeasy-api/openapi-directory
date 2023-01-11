package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuperfundProductsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetSuperfundProductsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}