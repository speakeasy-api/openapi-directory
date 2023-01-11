package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
public class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_letter")
    public Boolean haveLetter;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveLetter(Boolean haveLetter) {
        this.haveLetter = haveLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_number")
    public Boolean haveNumber;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveNumber(Boolean haveNumber) {
        this.haveNumber = haveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_allow_numeric")
    public Boolean onlyAllowNumeric;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withOnlyAllowNumeric(Boolean onlyAllowNumeric) {
        this.onlyAllowNumeric = onlyAllowNumeric;
        return this;
    }
}