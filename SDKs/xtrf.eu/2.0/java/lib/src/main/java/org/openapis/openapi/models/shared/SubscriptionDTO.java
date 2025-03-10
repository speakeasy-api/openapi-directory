/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscriptionDTO - Returns subscription Id.
 */
public class SubscriptionDTO {
    /**
     * additional fields which should be embedded in the event
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public String embed;

    public SubscriptionDTO withEmbed(String embed) {
        this.embed = embed;
        return this;
    }
    
    /**
     * event to which you want to subscribe
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;

    public SubscriptionDTO withEvent(String event) {
        this.event = event;
        return this;
    }
    
    /**
     * filter expression in the form 'attribute=value'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;

    public SubscriptionDTO withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * url that will be invoked by XTRF on event
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public SubscriptionDTO withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public SubscriptionDTO(){}
}
