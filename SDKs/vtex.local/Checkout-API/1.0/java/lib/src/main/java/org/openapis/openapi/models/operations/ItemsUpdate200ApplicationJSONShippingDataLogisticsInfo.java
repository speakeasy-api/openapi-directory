/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo {
    /**
     * Address ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressId")
    public String addressId;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
    
    /**
     * List of available delivery channels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryChannels")
    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfoDeliveryChannels[] deliveryChannels;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withDeliveryChannels(ItemsUpdate200ApplicationJSONShippingDataLogisticsInfoDeliveryChannels[] deliveryChannels) {
        this.deliveryChannels = deliveryChannels;
        return this;
    }
    
    /**
     * Item ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    
    /**
     * Index corresponding to the position of the object in the `items` array.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemIndex")
    public Long itemIndex;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withItemIndex(Long itemIndex) {
        this.itemIndex = itemIndex;
        return this;
    }
    
    /**
     * Delivery channel selected by the customer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedDeliveryChannel")
    public String selectedDeliveryChannel;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withSelectedDeliveryChannel(String selectedDeliveryChannel) {
        this.selectedDeliveryChannel = selectedDeliveryChannel;
        return this;
    }
    
    /**
     * SLA selected by the customer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedSla")
    public String selectedSla;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withSelectedSla(String selectedSla) {
        this.selectedSla = selectedSla;
        return this;
    }
    
    /**
     * List of countries that the item may be shipped to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipsTo")
    public String[] shipsTo;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withShipsTo(String[] shipsTo) {
        this.shipsTo = shipsTo;
        return this;
    }
    
    /**
     * Information on available SLAs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slas")
    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfoSlas[] slas;

    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo withSlas(ItemsUpdate200ApplicationJSONShippingDataLogisticsInfoSlas[] slas) {
        this.slas = slas;
        return this;
    }
    
    public ItemsUpdate200ApplicationJSONShippingDataLogisticsInfo(){}
}
