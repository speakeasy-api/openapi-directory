package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlacedBetPart {
    @JsonProperty("description")
    public String description;
    public PlacedBetPart withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eachWayDen")
    public Long eachWayDen;
    public PlacedBetPart withEachWayDen(Long eachWayDen) {
        this.eachWayDen = eachWayDen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eachWayNum")
    public Long eachWayNum;
    public PlacedBetPart withEachWayNum(Long eachWayNum) {
        this.eachWayNum = eachWayNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eachWayPlaces")
    public Long eachWayPlaces;
    public PlacedBetPart withEachWayPlaces(Long eachWayPlaces) {
        this.eachWayPlaces = eachWayPlaces;
        return this;
    }
    @JsonProperty("eventDescription")
    public String eventDescription;
    public PlacedBetPart withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public PlacedBetPart withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventMarketDescription")
    public String eventMarketDescription;
    public PlacedBetPart withEventMarketDescription(String eventMarketDescription) {
        this.eventMarketDescription = eventMarketDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeDescription")
    public String eventTypeDescription;
    public PlacedBetPart withEventTypeDescription(String eventTypeDescription) {
        this.eventTypeDescription = eventTypeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handicap")
    public Double handicap;
    public PlacedBetPart withHandicap(Double handicap) {
        this.handicap = handicap;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public PlacedBetPart withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("priceDen")
    public Long priceDen;
    public PlacedBetPart withPriceDen(Long priceDen) {
        this.priceDen = priceDen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public PriceFormatted priceFormatted;
    public PlacedBetPart withPriceFormatted(PriceFormatted priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonProperty("priceNum")
    public Long priceNum;
    public PlacedBetPart withPriceNum(Long priceNum) {
        this.priceNum = priceNum;
        return this;
    }
    @JsonProperty("priceType")
    public String priceType;
    public PlacedBetPart withPriceType(String priceType) {
        this.priceType = priceType;
        return this;
    }
    @JsonProperty("result")
    public String result;
    public PlacedBetPart withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule4Deductions")
    public Double rule4Deductions;
    public PlacedBetPart withRule4Deductions(Double rule4Deductions) {
        this.rule4Deductions = rule4Deductions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionId")
    public String selectionId;
    public PlacedBetPart withSelectionId(String selectionId) {
        this.selectionId = selectionId;
        return this;
    }
    @JsonProperty("startDateTime")
    public String startDateTime;
    public PlacedBetPart withStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
}