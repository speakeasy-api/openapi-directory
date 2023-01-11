package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetASite200ApplicationJsonMainAutoReceptionist
 * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
**/
public class GetASite200ApplicationJsonMainAutoReceptionist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_id")
    public String extensionId;
    public GetASite200ApplicationJsonMainAutoReceptionist withExtensionId(String extensionId) {
        this.extensionId = extensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetASite200ApplicationJsonMainAutoReceptionist withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetASite200ApplicationJsonMainAutoReceptionist withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetASite200ApplicationJsonMainAutoReceptionist withName(String name) {
        this.name = name;
        return this;
    }
}