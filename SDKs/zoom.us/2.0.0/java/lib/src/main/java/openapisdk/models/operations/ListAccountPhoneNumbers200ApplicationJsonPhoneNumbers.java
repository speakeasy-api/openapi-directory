package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee assignee;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withAssignee(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public String[] capability;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withCapability(String[] capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier carrier;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withCarrier(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum numberType;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withNumberType(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_group")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup sipGroup;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withSipGroup(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup sipGroup) {
        this.sipGroup = sipGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite site;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withSite(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum source;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withSource(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum status;
    public ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers withStatus(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum status) {
        this.status = status;
        return this;
    }
}