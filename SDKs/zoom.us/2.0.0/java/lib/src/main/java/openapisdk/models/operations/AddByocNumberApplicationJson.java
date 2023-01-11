package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddByocNumberApplicationJson {
    @JsonProperty("carrier")
    public String carrier;
    public AddByocNumberApplicationJson withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonProperty("phone_numbers")
    public String[] phoneNumbers;
    public AddByocNumberApplicationJson withPhoneNumbers(String[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public AddByocNumberApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}