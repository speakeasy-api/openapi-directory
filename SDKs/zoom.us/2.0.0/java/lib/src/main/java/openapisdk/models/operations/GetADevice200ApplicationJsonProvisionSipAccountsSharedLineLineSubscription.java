package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription
 * Line subscription.
**/
public class GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}