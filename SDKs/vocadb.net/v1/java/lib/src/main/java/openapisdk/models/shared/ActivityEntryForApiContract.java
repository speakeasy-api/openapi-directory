package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ActivityEntryForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archivedVersion")
    public ArchivedObjectVersionForApiContract archivedVersion;
    public ActivityEntryForApiContract withArchivedVersion(ArchivedObjectVersionForApiContract archivedVersion) {
        this.archivedVersion = archivedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserForApiContract author;
    public ActivityEntryForApiContract withAuthor(UserForApiContract author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public ActivityEntryForApiContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editEvent")
    public ActivityEntryForApiContractEditEventEnum editEvent;
    public ActivityEntryForApiContract withEditEvent(ActivityEntryForApiContractEditEventEnum editEvent) {
        this.editEvent = editEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry")
    public EntryForApiContract entry;
    public ActivityEntryForApiContract withEntry(EntryForApiContract entry) {
        this.entry = entry;
        return this;
    }
}