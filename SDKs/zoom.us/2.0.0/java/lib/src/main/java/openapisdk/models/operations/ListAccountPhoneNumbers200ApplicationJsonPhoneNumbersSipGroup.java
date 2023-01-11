package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup
 * Displayed when the `type` request parameter is `byoc`.
**/
public class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup withName(String name) {
        this.name = name;
        return this;
    }
}