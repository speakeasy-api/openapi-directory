package shared

type ChargeTierPriceFormatEnum string

const (
	ChargeTierPriceFormatEnumFlatFee ChargeTierPriceFormatEnum = "FlatFee"
	ChargeTierPriceFormatEnumPerUnit ChargeTierPriceFormatEnum = "PerUnit"
)

type ChargeTier struct {
	EndingUnit   *float64                  `json:"endingUnit,omitempty"`
	Price        float64                   `json:"price"`
	PriceFormat  ChargeTierPriceFormatEnum `json:"priceFormat"`
	StartingUnit float64                   `json:"startingUnit"`
	Tier         int64                     `json:"tier"`
}
