package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountCallLogs200ApplicationJsonCallLogsOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public AccountCallLogs200ApplicationJsonCallLogsOwner withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountCallLogs200ApplicationJsonCallLogsOwner withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountCallLogs200ApplicationJsonCallLogsOwner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum type;
    public AccountCallLogs200ApplicationJsonCallLogsOwner withType(AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum type) {
        this.type = type;
        return this;
    }
}