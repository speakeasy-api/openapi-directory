package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipTrunkNumbers200ApplicationJsonPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public ListSipTrunkNumbers200ApplicationJsonPhoneNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ListSipTrunkNumbers200ApplicationJsonPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
}