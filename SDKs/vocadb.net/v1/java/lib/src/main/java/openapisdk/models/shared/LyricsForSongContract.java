package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LyricsForSongContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureCode")
    public String cultureCode;
    public LyricsForSongContract withCultureCode(String cultureCode) {
        this.cultureCode = cultureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public LyricsForSongContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public LyricsForSongContract withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationType")
    public LyricsForSongContractTranslationTypeEnum translationType;
    public LyricsForSongContract withTranslationType(LyricsForSongContractTranslationTypeEnum translationType) {
        this.translationType = translationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LyricsForSongContract withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LyricsForSongContract withValue(String value) {
        this.value = value;
        return this;
    }
}