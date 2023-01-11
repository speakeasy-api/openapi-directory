package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration
 * Account Settings: Integration.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("box")
    public Boolean box;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withBox(Boolean box) {
        this.box = box;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropbox")
    public Boolean dropbox;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withDropbox(Boolean dropbox) {
        this.dropbox = dropbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_calendar")
    public Boolean googleCalendar;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withGoogleCalendar(Boolean googleCalendar) {
        this.googleCalendar = googleCalendar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_drive")
    public Boolean googleDrive;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withGoogleDrive(Boolean googleDrive) {
        this.googleDrive = googleDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubi")
    public Boolean kubi;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withKubi(Boolean kubi) {
        this.kubi = kubi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoft_one_drive")
    public Boolean microsoftOneDrive;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration withMicrosoftOneDrive(Boolean microsoftOneDrive) {
        this.microsoftOneDrive = microsoftOneDrive;
        return this;
    }
}