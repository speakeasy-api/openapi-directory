package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderContact
 * Use this field to create a new account as the sold-to contact of the Order Line Item (OLI). 
 * 
 * You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI. 
 * 
 * If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
 * 
**/
public class OrderContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address1")
    public String address1;
    public OrderContact withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public OrderContact withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public OrderContact withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public OrderContact withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public OrderContact withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public OrderContact withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public OrderContact withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public OrderContact withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public OrderContact withState(String state) {
        this.state = state;
        return this;
    }
}