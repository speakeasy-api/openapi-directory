package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_rating")
    public String[] contentRating;
    public UploadVideoAlt1RequestBody withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UploadVideoAlt1RequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public UploadVideoAlt1RequestBodyEmbed embed;
    public UploadVideoAlt1RequestBody withEmbed(UploadVideoAlt1RequestBodyEmbed embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public UploadVideoAlt1RequestBodyLicenseEnum license;
    public UploadVideoAlt1RequestBody withLicense(UploadVideoAlt1RequestBodyLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public UploadVideoAlt1RequestBody withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UploadVideoAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UploadVideoAlt1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public UploadVideoAlt1RequestBodyPrivacy privacy;
    public UploadVideoAlt1RequestBody withPrivacy(UploadVideoAlt1RequestBodyPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratings")
    public UploadVideoAlt1RequestBodyRatings ratings;
    public UploadVideoAlt1RequestBody withRatings(UploadVideoAlt1RequestBodyRatings ratings) {
        this.ratings = ratings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_page")
    public UploadVideoAlt1RequestBodyReviewPage reviewPage;
    public UploadVideoAlt1RequestBody withReviewPage(UploadVideoAlt1RequestBodyReviewPage reviewPage) {
        this.reviewPage = reviewPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spatial")
    public UploadVideoAlt1RequestBodySpatial spatial;
    public UploadVideoAlt1RequestBody withSpatial(UploadVideoAlt1RequestBodySpatial spatial) {
        this.spatial = spatial;
        return this;
    }
    @JsonProperty("upload")
    public UploadVideoAlt1RequestBodyUpload upload;
    public UploadVideoAlt1RequestBody withUpload(UploadVideoAlt1RequestBodyUpload upload) {
        this.upload = upload;
        return this;
    }
}