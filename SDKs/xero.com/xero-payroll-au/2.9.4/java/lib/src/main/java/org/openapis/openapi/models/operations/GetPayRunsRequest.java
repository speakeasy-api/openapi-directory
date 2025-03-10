/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetPayRunsRequest {
    /**
     * Only records created or modified since this timestamp will be returned
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;

    public GetPayRunsRequest withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    
    /**
     * Xero identifier for Tenant
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;

    public GetPayRunsRequest withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
    
    /**
     * Order by an any element
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public String order;

    public GetPayRunsRequest withOrder(String order) {
        this.order = order;
        return this;
    }
    
    /**
     * e.g. page=1 – Up to 100 PayRuns will be returned in a single API call
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public GetPayRunsRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Filter by an any element
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;

    public GetPayRunsRequest withWhere(String where) {
        this.where = where;
        return this;
    }
    
    public GetPayRunsRequest(@JsonProperty("Xero-Tenant-Id") String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
  }
}
