package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipTrunkNumbers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public ListSipTrunkNumbers200ApplicationJsonPhoneNumbers[] phoneNumbers;
    public ListSipTrunkNumbers200ApplicationJson withPhoneNumbers(ListSipTrunkNumbers200ApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListSipTrunkNumbers200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}