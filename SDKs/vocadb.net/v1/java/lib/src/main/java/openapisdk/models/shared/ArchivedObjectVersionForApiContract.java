package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArchivedObjectVersionForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changedFields")
    public String[] changedFields;
    public ArchivedObjectVersionForApiContract withChangedFields(String[] changedFields) {
        this.changedFields = changedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ArchivedObjectVersionForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ArchivedObjectVersionForApiContract withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ArchivedObjectVersionForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
}