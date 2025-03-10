/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserorderdetailsSubscriptionDataSubscriptionsPlan - Information about the subscription's validility and frequency.
 */
public class UserorderdetailsSubscriptionDataSubscriptionsPlan {
    /**
     * Information about subscriptions' recurrence.
     */
    @JsonProperty("frequency")
    public UserorderdetailsSubscriptionDataSubscriptionsPlanFrequency frequency;

    public UserorderdetailsSubscriptionDataSubscriptionsPlan withFrequency(UserorderdetailsSubscriptionDataSubscriptionsPlanFrequency frequency) {
        this.frequency = frequency;
        return this;
    }
    
    /**
     * Type of plan.
     */
    @JsonProperty("type")
    public String type;

    public UserorderdetailsSubscriptionDataSubscriptionsPlan withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * Information about the period during which the subscription will be valid.
     */
    @JsonProperty("validity")
    public UserorderdetailsSubscriptionDataSubscriptionsPlanValidity validity;

    public UserorderdetailsSubscriptionDataSubscriptionsPlan withValidity(UserorderdetailsSubscriptionDataSubscriptionsPlanValidity validity) {
        this.validity = validity;
        return this;
    }
    
    public UserorderdetailsSubscriptionDataSubscriptionsPlan(@JsonProperty("frequency") UserorderdetailsSubscriptionDataSubscriptionsPlanFrequency frequency, @JsonProperty("type") String type, @JsonProperty("validity") UserorderdetailsSubscriptionDataSubscriptionsPlanValidity validity) {
        this.frequency = frequency;
        this.type = type;
        this.validity = validity;
  }
}
