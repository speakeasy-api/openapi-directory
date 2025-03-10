/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUpdatePickupPointRequestBodyAddressCountry {
    /**
     * Three letter ISO code of the address country.
     */
    @JsonProperty("acronym")
    public String acronym;

    public CreateUpdatePickupPointRequestBodyAddressCountry withAcronym(String acronym) {
        this.acronym = acronym;
        return this;
    }
    
    /**
     * Address country name.
     */
    @JsonProperty("name")
    public String name;

    public CreateUpdatePickupPointRequestBodyAddressCountry withName(String name) {
        this.name = name;
        return this;
    }
    
    public CreateUpdatePickupPointRequestBodyAddressCountry(@JsonProperty("acronym") String acronym, @JsonProperty("name") String name) {
        this.acronym = acronym;
        this.name = name;
  }
}
