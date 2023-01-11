package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class TagBaseContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
@SpeakeasyMetadata("form:name=additionalNames")
    public String additionalNames;
    public TagBaseContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryName")
@SpeakeasyMetadata("form:name=categoryName")
    public String categoryName;
    public TagBaseContract withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
@SpeakeasyMetadata("form:name=id")
    public Integer id;
    public TagBaseContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public TagBaseContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
@SpeakeasyMetadata("form:name=urlSlug")
    public String urlSlug;
    public TagBaseContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
}