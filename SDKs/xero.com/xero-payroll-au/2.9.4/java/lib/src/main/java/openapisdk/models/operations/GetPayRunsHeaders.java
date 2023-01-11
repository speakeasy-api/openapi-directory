package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetPayRunsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetPayRunsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}