package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo
 * Indicates who the call was forwarded to.
**/
public class PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}