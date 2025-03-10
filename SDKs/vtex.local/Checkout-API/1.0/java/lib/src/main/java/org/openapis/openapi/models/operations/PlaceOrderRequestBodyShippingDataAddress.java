/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PlaceOrderRequestBodyShippingDataAddress - Shipping address.
 * 
 * For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.
 */
public class PlaceOrderRequestBodyShippingDataAddress {
    /**
     * Address ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressId")
    public String addressId;

    public PlaceOrderRequestBodyShippingDataAddress withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
    
    /**
     * Type of address. For example, `Residential` or `Pickup`, among others.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressType")
    public String addressType;

    public PlaceOrderRequestBodyShippingDataAddress withAddressType(String addressType) {
        this.addressType = addressType;
        return this;
    }
    
    /**
     * City of the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;

    public PlaceOrderRequestBodyShippingDataAddress withCity(String city) {
        this.city = city;
        return this;
    }
    
    /**
     * Complement to the shipping address in case it applies.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complement")
    public String complement;

    public PlaceOrderRequestBodyShippingDataAddress withComplement(String complement) {
        this.complement = complement;
        return this;
    }
    
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;

    public PlaceOrderRequestBodyShippingDataAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoCoordinates")
    public Double[] geoCoordinates;

    public PlaceOrderRequestBodyShippingDataAddress withGeoCoordinates(Double[] geoCoordinates) {
        this.geoCoordinates = geoCoordinates;
        return this;
    }
    
    /**
     * Neighborhood of the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neighborhood")
    public String neighborhood;

    public PlaceOrderRequestBodyShippingDataAddress withNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
        return this;
    }
    
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;

    public PlaceOrderRequestBodyShippingDataAddress withNumber(String number) {
        this.number = number;
        return this;
    }
    
    /**
     * Postal Code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;

    public PlaceOrderRequestBodyShippingDataAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    
    /**
     * Name of the person who is going to receive the order.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiverName")
    public String receiverName;

    public PlaceOrderRequestBodyShippingDataAddress withReceiverName(String receiverName) {
        this.receiverName = receiverName;
        return this;
    }
    
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;

    public PlaceOrderRequestBodyShippingDataAddress withReference(String reference) {
        this.reference = reference;
        return this;
    }
    
    /**
     * State of the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;

    public PlaceOrderRequestBodyShippingDataAddress withState(String state) {
        this.state = state;
        return this;
    }
    
    /**
     * Street of the shipping address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street")
    public String street;

    public PlaceOrderRequestBodyShippingDataAddress withStreet(String street) {
        this.street = street;
        return this;
    }
    
    public PlaceOrderRequestBodyShippingDataAddress(){}
}
