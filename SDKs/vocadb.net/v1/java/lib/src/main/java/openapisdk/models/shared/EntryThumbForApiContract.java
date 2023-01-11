package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryThumbForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime")
    public String mime;
    public EntryThumbForApiContract withMime(String mime) {
        this.mime = mime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlOriginal")
    public String urlOriginal;
    public EntryThumbForApiContract withUrlOriginal(String urlOriginal) {
        this.urlOriginal = urlOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSmallThumb")
    public String urlSmallThumb;
    public EntryThumbForApiContract withUrlSmallThumb(String urlSmallThumb) {
        this.urlSmallThumb = urlSmallThumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlThumb")
    public String urlThumb;
    public EntryThumbForApiContract withUrlThumb(String urlThumb) {
        this.urlThumb = urlThumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlTinyThumb")
    public String urlTinyThumb;
    public EntryThumbForApiContract withUrlTinyThumb(String urlTinyThumb) {
        this.urlTinyThumb = urlTinyThumb;
        return this;
    }
}