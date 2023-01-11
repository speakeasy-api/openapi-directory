package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum source;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers withSource(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum source) {
        this.source = source;
        return this;
    }
}