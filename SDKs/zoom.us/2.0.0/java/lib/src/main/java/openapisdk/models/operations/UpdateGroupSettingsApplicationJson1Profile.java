package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJson1Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation recordingStorageLocation;
    public UpdateGroupSettingsApplicationJson1Profile withRecordingStorageLocation(UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}