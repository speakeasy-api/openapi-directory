package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public UserSettings200ApplicationJsonUserSettingsProfile withRecordingStorageLocation(UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}