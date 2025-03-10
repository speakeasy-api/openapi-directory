/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Address {
    /**
     * Address ID.
     */
    @JsonProperty("addressId")
    public String addressId;

    public Address withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
    
    /**
     * Address type.
     */
    @JsonProperty("addressType")
    public String addressType;

    public Address withAddressType(String addressType) {
        this.addressType = addressType;
        return this;
    }
    
    /**
     * Address city.
     */
    @JsonProperty("city")
    public String city;

    public Address withCity(String city) {
        this.city = city;
        return this;
    }
    
    /**
     * Address complement.
     */
    @JsonProperty("complement")
    public String complement;

    public Address withComplement(String complement) {
        this.complement = complement;
        return this;
    }
    
    /**
     * Address country.
     */
    @JsonProperty("country")
    public String country;

    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Geolocation coordinates.
     */
    @JsonProperty("geoCoordinates")
    public String[] geoCoordinates;

    public Address withGeoCoordinates(String[] geoCoordinates) {
        this.geoCoordinates = geoCoordinates;
        return this;
    }
    
    /**
     * Address neighborhood.
     */
    @JsonProperty("neighborhood")
    public String neighborhood;

    public Address withNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
        return this;
    }
    
    /**
     * Address number.
     */
    @JsonProperty("number")
    public String number;

    public Address withNumber(String number) {
        this.number = number;
        return this;
    }
    
    /**
     * Address postal code.
     */
    @JsonProperty("postalCode")
    public String postalCode;

    public Address withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    
    /**
     * Address receiver name.
     */
    @JsonProperty("receiverName")
    public String receiverName;

    public Address withReceiverName(String receiverName) {
        this.receiverName = receiverName;
        return this;
    }
    
    /**
     * Address reference.
     */
    @JsonProperty("reference")
    public String reference;

    public Address withReference(String reference) {
        this.reference = reference;
        return this;
    }
    
    /**
     * Address state.
     */
    @JsonProperty("state")
    public String state;

    public Address withState(String state) {
        this.state = state;
        return this;
    }
    
    /**
     * Address street.
     */
    @JsonProperty("street")
    public String street;

    public Address withStreet(String street) {
        this.street = street;
        return this;
    }
    
    public Address(@JsonProperty("addressId") String addressId, @JsonProperty("addressType") String addressType, @JsonProperty("city") String city, @JsonProperty("complement") String complement, @JsonProperty("country") String country, @JsonProperty("geoCoordinates") String[] geoCoordinates, @JsonProperty("neighborhood") String neighborhood, @JsonProperty("number") String number, @JsonProperty("postalCode") String postalCode, @JsonProperty("receiverName") String receiverName, @JsonProperty("reference") String reference, @JsonProperty("state") String state, @JsonProperty("street") String street) {
        this.addressId = addressId;
        this.addressType = addressType;
        this.city = city;
        this.complement = complement;
        this.country = country;
        this.geoCoordinates = geoCoordinates;
        this.neighborhood = neighborhood;
        this.number = number;
        this.postalCode = postalCode;
        this.receiverName = receiverName;
        this.reference = reference;
        this.state = state;
        this.street = street;
  }
}
