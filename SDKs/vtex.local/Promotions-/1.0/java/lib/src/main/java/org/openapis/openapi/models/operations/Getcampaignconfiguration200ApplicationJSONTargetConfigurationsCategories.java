/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Getcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories - Object with information of the category.
 */
public class Getcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories {
    /**
     * Category ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Getcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Category Name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Getcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories withName(String name) {
        this.name = name;
        return this;
    }
    
    public Getcampaignconfiguration200ApplicationJSONTargetConfigurationsCategories(){}
}
