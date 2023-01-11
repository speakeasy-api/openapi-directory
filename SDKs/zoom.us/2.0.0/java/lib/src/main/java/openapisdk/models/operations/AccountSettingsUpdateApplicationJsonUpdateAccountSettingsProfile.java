package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile withRecordingStorageLocation(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}