package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetADevice200ApplicationJsonAssignee
 * User to whom the device has been assigned.
**/
public class GetADevice200ApplicationJsonAssignee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetADevice200ApplicationJsonAssignee withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetADevice200ApplicationJsonAssignee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetADevice200ApplicationJsonAssignee withName(String name) {
        this.name = name;
        return this;
    }
}