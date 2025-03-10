/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Items200ApplicationJSONItemsPriceTags {
    /**
     * Price tag identifier.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;

    public Items200ApplicationJSONItemsPriceTags withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    
    /**
     * Indicates whether price tag value is applied through a percentage.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPercentual")
    public Boolean isPercentual;

    public Items200ApplicationJSONItemsPriceTags withIsPercentual(Boolean isPercentual) {
        this.isPercentual = isPercentual;
        return this;
    }
    
    /**
     * Price tag name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Items200ApplicationJSONItemsPriceTags withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Price tag raw value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawValue")
    public Long rawValue;

    public Items200ApplicationJSONItemsPriceTags withRawValue(Long rawValue) {
        this.rawValue = rawValue;
        return this;
    }
    
    /**
     * Price tag value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;

    public Items200ApplicationJSONItemsPriceTags withValue(Long value) {
        this.value = value;
        return this;
    }
    
    public Items200ApplicationJSONItemsPriceTags(){}
}
