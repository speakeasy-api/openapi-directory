/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteFeedConnectionsRequest {
    /**
     * Feed Connections array object in the body
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.FeedConnections feedConnections;

    public DeleteFeedConnectionsRequest withFeedConnections(org.openapis.openapi.models.shared.FeedConnections feedConnections) {
        this.feedConnections = feedConnections;
        return this;
    }
    
    /**
     * Xero identifier for Tenant
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;

    public DeleteFeedConnectionsRequest withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
    
    public DeleteFeedConnectionsRequest(@JsonProperty("FeedConnections") org.openapis.openapi.models.shared.FeedConnections feedConnections, @JsonProperty("Xero-Tenant-Id") String xeroTenantId) {
        this.feedConnections = feedConnections;
        this.xeroTenantId = xeroTenantId;
  }
}
