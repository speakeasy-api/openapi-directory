package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum type;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee withType(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum type) {
        this.type = type;
        return this;
    }
}