// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type EntityIDWithTime struct {
	// Entity Identifier
	EntityID   *string         `json:"entity_id,omitempty"`
	EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
	Time       *int64          `json:"time,omitempty"`
}
