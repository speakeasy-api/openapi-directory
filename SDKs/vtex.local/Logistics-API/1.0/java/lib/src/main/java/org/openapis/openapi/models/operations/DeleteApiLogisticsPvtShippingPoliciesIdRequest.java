/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteApiLogisticsPvtShippingPoliciesIdRequest {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;

    public DeleteApiLogisticsPvtShippingPoliciesIdRequest withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    
    /**
     * Type of the content being sent
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;

    public DeleteApiLogisticsPvtShippingPoliciesIdRequest withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ID of the shipping policy.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public DeleteApiLogisticsPvtShippingPoliciesIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    public DeleteApiLogisticsPvtShippingPoliciesIdRequest(@JsonProperty("Accept") String accept, @JsonProperty("Content-Type") String contentType, @JsonProperty("id") String id) {
        this.accept = accept;
        this.contentType = contentType;
        this.id = id;
  }
}
