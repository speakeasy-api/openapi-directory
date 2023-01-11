package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPhoneNumberDetails200ApplicationJsonAssignee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetPhoneNumberDetails200ApplicationJsonAssignee withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPhoneNumberDetails200ApplicationJsonAssignee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPhoneNumberDetails200ApplicationJsonAssignee withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum type;
    public GetPhoneNumberDetails200ApplicationJsonAssignee withType(GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum type) {
        this.type = type;
        return this;
    }
}