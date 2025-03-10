<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdatePrice200ApplicationJSON - Successful Operation
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdatePrice200ApplicationJSON
{
    /**
     * $errors
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdatePrice200ApplicationJSONErrors> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdatePrice200ApplicationJSONErrors>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
    /**
     * Marketplace name. Example: Walmart-US
     * 
     * @var ?string $mart
     */
	#[\JMS\Serializer\Annotation\SerializedName('mart')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mart = null;
    
    /**
     * A message of acknowledgement for a price update
     * 
     * @var ?string $message
     */
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * 
     * @var ?string $sku
     */
	#[\JMS\Serializer\Annotation\SerializedName('sku')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sku = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('statusCode')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $statusCode = null;
    
	public function __construct()
	{
		$this->errors = null;
		$this->mart = null;
		$this->message = null;
		$this->sku = null;
		$this->statusCode = null;
	}
}
