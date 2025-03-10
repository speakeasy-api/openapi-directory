/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClearorderFormMessages200ApplicationJSONItemsPriceDefinition - Price information for all units of a specific item.
 */
public class ClearorderFormMessages200ApplicationJSONItemsPriceDefinition {
    /**
     * Item's calculated unitary selling price in cents.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculatedSellingPrice")
    public Long calculatedSellingPrice;

    public ClearorderFormMessages200ApplicationJSONItemsPriceDefinition withCalculatedSellingPrice(Long calculatedSellingPrice) {
        this.calculatedSellingPrice = calculatedSellingPrice;
        return this;
    }
    
    /**
     * Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellingPrices")
    public ClearorderFormMessages200ApplicationJSONItemsPriceDefinitionSellingPrices[] sellingPrices;

    public ClearorderFormMessages200ApplicationJSONItemsPriceDefinition withSellingPrices(ClearorderFormMessages200ApplicationJSONItemsPriceDefinitionSellingPrices[] sellingPrices) {
        this.sellingPrices = sellingPrices;
        return this;
    }
    
    /**
     * Total value for all units of the item in cents.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;

    public ClearorderFormMessages200ApplicationJSONItemsPriceDefinition withTotal(Long total) {
        this.total = total;
        return this;
    }
    
    public ClearorderFormMessages200ApplicationJSONItemsPriceDefinition(){}
}
