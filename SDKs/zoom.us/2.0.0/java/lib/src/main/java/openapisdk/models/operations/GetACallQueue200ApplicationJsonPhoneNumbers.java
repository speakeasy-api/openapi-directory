package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACallQueue200ApplicationJsonPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetACallQueue200ApplicationJsonPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public GetACallQueue200ApplicationJsonPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum source;
    public GetACallQueue200ApplicationJsonPhoneNumbers withSource(GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum source) {
        this.source = source;
        return this;
    }
}