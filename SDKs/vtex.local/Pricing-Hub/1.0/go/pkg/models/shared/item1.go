// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type Item1 struct {
	// The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.
	CostPrice float64 `json:"costPrice"`
	// The same index referring to Checkout's cart that was passed to the API
	Index int64 `json:"index"`
	// The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
	ListPrice float64 `json:"listPrice"`
	// The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
	Price float64 `json:"price"`
	// The price table that was used to price the item
	PriceTable string `json:"priceTable"`
	// The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339
	PriceValidUntil string `json:"priceValidUntil"`
	// The same skuId that was passed to the API
	SkuID string `json:"skuId"`
}
