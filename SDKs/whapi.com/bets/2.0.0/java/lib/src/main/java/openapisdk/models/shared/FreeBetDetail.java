package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FreeBetDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awardDateTime")
    public String awardDateTime;
    public FreeBetDetail withAwardDateTime(String awardDateTime) {
        this.awardDateTime = awardDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayText")
    public String displayText;
    public FreeBetDetail withDisplayText(String displayText) {
        this.displayText = displayText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryDateTime")
    public String expiryDateTime;
    public FreeBetDetail withExpiryDateTime(String expiryDateTime) {
        this.expiryDateTime = expiryDateTime;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public FreeBetDetail withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerDesc")
    public String offerDesc;
    public FreeBetDetail withOfferDesc(String offerDesc) {
        this.offerDesc = offerDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public Long offerId;
    public FreeBetDetail withOfferId(Long offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonProperty("offerName")
    public String offerName;
    public FreeBetDetail withOfferName(String offerName) {
        this.offerName = offerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDateTime")
    public String startDateTime;
    public FreeBetDetail withStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public FreeBetDetail withValue(Double value) {
        this.value = value;
        return this;
    }
}