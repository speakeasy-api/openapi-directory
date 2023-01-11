package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSharedLineGroups200ApplicationJsonSharedLineGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers[] phoneNumbers;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withPhoneNumbers(ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite site;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withSite(ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum status;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroups withStatus(ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum status) {
        this.status = status;
        return this;
    }
}