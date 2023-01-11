package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJson1Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation recordingStorageLocation;
    public GetGroupSettings200ApplicationJson1Profile withRecordingStorageLocation(GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}