package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SongListBaseContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredCategory")
    public SongListBaseContractFeaturedCategoryEnum featuredCategory;
    public SongListBaseContract withFeaturedCategory(SongListBaseContractFeaturedCategoryEnum featuredCategory) {
        this.featuredCategory = featuredCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongListBaseContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongListBaseContract withName(String name) {
        this.name = name;
        return this;
    }
}