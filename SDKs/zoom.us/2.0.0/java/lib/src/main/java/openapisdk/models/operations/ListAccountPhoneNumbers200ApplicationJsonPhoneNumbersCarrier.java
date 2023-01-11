package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier
 * Displayed when the `type` request parameter is `byoc`.
**/
public class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier withName(String name) {
        this.name = name;
        return this;
    }
}