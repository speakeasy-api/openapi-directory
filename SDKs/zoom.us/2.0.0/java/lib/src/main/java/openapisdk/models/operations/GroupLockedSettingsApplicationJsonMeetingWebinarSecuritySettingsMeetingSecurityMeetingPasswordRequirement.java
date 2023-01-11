package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
public class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consecutive_characters_length")
    public Long consecutiveCharactersLength;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withConsecutiveCharactersLength(Long consecutiveCharactersLength) {
        this.consecutiveCharactersLength = consecutiveCharactersLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_letter")
    public Boolean haveLetter;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withHaveLetter(Boolean haveLetter) {
        this.haveLetter = haveLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_number")
    public Boolean haveNumber;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withHaveNumber(Boolean haveNumber) {
        this.haveNumber = haveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_upper_and_lower_characters")
    public Boolean haveUpperAndLowerCharacters;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withHaveUpperAndLowerCharacters(Boolean haveUpperAndLowerCharacters) {
        this.haveUpperAndLowerCharacters = haveUpperAndLowerCharacters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_allow_numeric")
    public Boolean onlyAllowNumeric;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withOnlyAllowNumeric(Boolean onlyAllowNumeric) {
        this.onlyAllowNumeric = onlyAllowNumeric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weak_enhance_detection")
    public Boolean weakEnhanceDetection;
    public GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement withWeakEnhanceDetection(Boolean weakEnhanceDetection) {
        this.weakEnhanceDetection = weakEnhanceDetection;
        return this;
    }
}