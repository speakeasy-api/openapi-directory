package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Field withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Field withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOptional")
    public Boolean isOptional;
    public Field withIsOptional(Boolean isOptional) {
        this.isOptional = isOptional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isValueProvided")
    public Boolean isValueProvided;
    public Field withIsValueProvided(Boolean isValueProvided) {
        this.isValueProvided = isValueProvided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Long maxLength;
    public Field withMaxLength(Long maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Long minLength;
    public Field withMinLength(Long minLength) {
        this.minLength = minLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Field withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public Option[] option;
    public Field withOption(Option[] option) {
        this.option = option;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public Field withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public Field withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FieldTypeEnum type;
    public Field withType(FieldTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Field withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueEditable")
    public String valueEditable;
    public Field withValueEditable(String valueEditable) {
        this.valueEditable = valueEditable;
        return this;
    }
}