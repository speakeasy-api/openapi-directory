/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RetrysubscriptionbygroupIdRequest {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;

    public RetrysubscriptionbygroupIdRequest withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    
    /**
     * Type of the content being sent.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;

    public RetrysubscriptionbygroupIdRequest withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Group ID.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupid")
    public String groupid;

    public RetrysubscriptionbygroupIdRequest withGroupid(String groupid) {
        this.groupid = groupid;
        return this;
    }
    
    /**
     * Instance ID.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instanceId")
    public String instanceId;

    public RetrysubscriptionbygroupIdRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    
    public RetrysubscriptionbygroupIdRequest(@JsonProperty("Accept") String accept, @JsonProperty("Content-Type") String contentType, @JsonProperty("groupid") String groupid, @JsonProperty("instanceId") String instanceId) {
        this.accept = accept;
        this.contentType = contentType;
        this.groupid = groupid;
        this.instanceId = instanceId;
  }
}
