/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus - Object with information of the SKU.
 */
public class Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus {
    /**
     * SKU ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * SKU Name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus withName(String name) {
        this.name = name;
        return this;
    }
    
    public Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus(){}
}
