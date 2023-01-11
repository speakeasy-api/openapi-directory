package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite withName(String name) {
        this.name = name;
        return this;
    }
}