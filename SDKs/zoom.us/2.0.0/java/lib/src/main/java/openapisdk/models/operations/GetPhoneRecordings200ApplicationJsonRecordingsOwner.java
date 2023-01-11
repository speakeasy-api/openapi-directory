package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPhoneRecordings200ApplicationJsonRecordingsOwner
 * The owner of the recording.
**/
public class GetPhoneRecordings200ApplicationJsonRecordingsOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public GetPhoneRecordings200ApplicationJsonRecordingsOwner withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPhoneRecordings200ApplicationJsonRecordingsOwner withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPhoneRecordings200ApplicationJsonRecordingsOwner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum type;
    public GetPhoneRecordings200ApplicationJsonRecordingsOwner withType(GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum type) {
        this.type = type;
        return this;
    }
}