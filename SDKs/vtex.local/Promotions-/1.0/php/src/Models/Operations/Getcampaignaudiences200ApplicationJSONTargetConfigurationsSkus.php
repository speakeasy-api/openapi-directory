<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus - Object with information of the SKU.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class Getcampaignaudiences200ApplicationJSONTargetConfigurationsSkus
{
    /**
     * SKU ID.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * SKU Name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->id = null;
		$this->name = null;
	}
}
