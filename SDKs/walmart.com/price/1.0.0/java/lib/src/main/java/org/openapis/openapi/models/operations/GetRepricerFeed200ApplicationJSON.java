/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRepricerFeed200ApplicationJSON - Successful Operation
 */
public class GetRepricerFeed200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedId")
    public String feedId;

    public GetRepricerFeed200ApplicationJSON withFeedId(String feedId) {
        this.feedId = feedId;
        return this;
    }
    
    public GetRepricerFeed200ApplicationJSON(){}
}
