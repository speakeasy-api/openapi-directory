package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}