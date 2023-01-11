package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum status;
    public ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers withStatus(ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum status) {
        this.status = status;
        return this;
    }
}