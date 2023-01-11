package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public UserSettingsUpdateApplicationJsonUserSettingsProfile withRecordingStorageLocation(UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}