package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public Field[] field;
    public Row withField(Field[] field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldRowChoice")
    public String fieldRowChoice;
    public Row withFieldRowChoice(String fieldRowChoice) {
        this.fieldRowChoice = fieldRowChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public String form;
    public Row withForm(String form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Row withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Row withLabel(String label) {
        this.label = label;
        return this;
    }
}