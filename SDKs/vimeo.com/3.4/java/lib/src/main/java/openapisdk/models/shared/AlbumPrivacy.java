package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlbumPrivacy
 * The privacy settings of the album.
**/
public class AlbumPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public AlbumPrivacy withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("view")
    public AlbumPrivacyViewEnum view;
    public AlbumPrivacy withView(AlbumPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}