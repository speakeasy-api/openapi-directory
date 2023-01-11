package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumEmbed
 * Embed data for the album.
**/
public class AlbumEmbed {
    @JsonProperty("html")
    public String html;
    public AlbumEmbed withHtml(String html) {
        this.html = html;
        return this;
    }
}