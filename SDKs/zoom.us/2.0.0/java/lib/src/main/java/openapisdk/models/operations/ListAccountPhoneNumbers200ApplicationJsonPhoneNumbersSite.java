package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite withName(String name) {
        this.name = name;
        return this;
    }
}