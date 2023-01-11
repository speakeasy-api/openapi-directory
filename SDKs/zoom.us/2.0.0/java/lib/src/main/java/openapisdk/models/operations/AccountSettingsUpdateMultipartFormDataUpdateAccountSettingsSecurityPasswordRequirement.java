package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consecutive_characters_length")
    public Long consecutiveCharactersLength;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement withConsecutiveCharactersLength(Long consecutiveCharactersLength) {
        this.consecutiveCharactersLength = consecutiveCharactersLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_password_length")
    public Long minimumPasswordLength;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement withMinimumPasswordLength(Long minimumPasswordLength) {
        this.minimumPasswordLength = minimumPasswordLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weak_enhance_detection")
    public Boolean weakEnhanceDetection;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement withWeakEnhanceDetection(Boolean weakEnhanceDetection) {
        this.weakEnhanceDetection = weakEnhanceDetection;
        return this;
    }
}