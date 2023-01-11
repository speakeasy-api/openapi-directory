package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddByocNumber201ApplicationJsonPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddByocNumber201ApplicationJsonPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public AddByocNumber201ApplicationJsonPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
}