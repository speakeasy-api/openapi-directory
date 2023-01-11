package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPhoneNumberDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public GetPhoneNumberDetails200ApplicationJsonAssignee assignee;
    public GetPhoneNumberDetails200ApplicationJson withAssignee(GetPhoneNumberDetails200ApplicationJsonAssignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public String[] capability;
    public GetPhoneNumberDetails200ApplicationJson withCapability(String[] capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetPhoneNumberDetails200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPhoneNumberDetails200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GetPhoneNumberDetails200ApplicationJson withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public GetPhoneNumberDetails200ApplicationJson withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum numberType;
    public GetPhoneNumberDetails200ApplicationJson withNumberType(GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetPhoneNumberDetails200ApplicationJsonSite site;
    public GetPhoneNumberDetails200ApplicationJson withSite(GetPhoneNumberDetails200ApplicationJsonSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GetPhoneNumberDetails200ApplicationJsonSourceEnum source;
    public GetPhoneNumberDetails200ApplicationJson withSource(GetPhoneNumberDetails200ApplicationJsonSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetPhoneNumberDetails200ApplicationJsonStatusEnum status;
    public GetPhoneNumberDetails200ApplicationJson withStatus(GetPhoneNumberDetails200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}