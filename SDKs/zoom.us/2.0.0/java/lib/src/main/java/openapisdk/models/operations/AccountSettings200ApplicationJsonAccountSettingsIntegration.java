package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsIntegration
 * Account Settings: Integration.
**/
public class AccountSettings200ApplicationJsonAccountSettingsIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("box")
    public Boolean box;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withBox(Boolean box) {
        this.box = box;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropbox")
    public Boolean dropbox;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withDropbox(Boolean dropbox) {
        this.dropbox = dropbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_calendar")
    public Boolean googleCalendar;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withGoogleCalendar(Boolean googleCalendar) {
        this.googleCalendar = googleCalendar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_drive")
    public Boolean googleDrive;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withGoogleDrive(Boolean googleDrive) {
        this.googleDrive = googleDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubi")
    public Boolean kubi;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withKubi(Boolean kubi) {
        this.kubi = kubi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoft_one_drive")
    public Boolean microsoftOneDrive;
    public AccountSettings200ApplicationJsonAccountSettingsIntegration withMicrosoftOneDrive(Boolean microsoftOneDrive) {
        this.microsoftOneDrive = microsoftOneDrive;
        return this;
    }
}