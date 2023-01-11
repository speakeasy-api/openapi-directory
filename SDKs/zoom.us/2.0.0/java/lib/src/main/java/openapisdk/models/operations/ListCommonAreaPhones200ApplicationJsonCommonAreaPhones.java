package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommonAreaPhones200ApplicationJsonCommonAreaPhones {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_plans")
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans[] callingPlans;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withCallingPlans(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans[] callingPlans) {
        this.callingPlans = callingPlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers[] phoneNumbers;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withPhoneNumbers(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite site;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withSite(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones withStatus(String status) {
        this.status = status;
        return this;
    }
}